using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using E_Commerce_Application.Models;

namespace E_Commerce_Application.Controllers
{
    public class UserController : Controller
    {
        db_e_CommerceEntities db = new db_e_CommerceEntities();
        
        public ActionResult Index()
        {
            HttpCookieCollection cookies = Request.Cookies;
            Product product = new Product();
            product.ProductList = (from p in db.tbl_Product.Where(a => a.str_ActivationStatus == "ACT")
                                   select new Product
                                   {
                                       lng_ProductID = p.lng_ProductID,
                                       str_Productname = p.str_Productname,
                                       str_Imageurl = p.str_Imageurl,
                                       lng_Price = p.lng_Price
                                   }).ToList();

            //ViewBag.userid = Request.Cookies["user_Id"].Value;
            //ViewBag.username = Request.Cookies["username"].Value;
            //var UserId = Convert.ToInt64(Request.Cookies["user_Id"].Value);
            ViewBag.username = "user@gmail.com";     
            var UserID = -9223372036854775807;
            ViewBag.count = db.tbl_PurchasedItem.Where(a => a.lng_UserID == UserID && a.str_Status == "CART").ToList().Count();
            return View(product);

        }
        [HttpGet]
        public ActionResult ViewCart()
        {
            Product product = new Product();
            List<Product> cartList = new List<Product>();
            var UserId = -9223372036854775807;

            product.ProductList = (from pr in db.tbl_PurchasedItem.Where(a => a.lng_UserID == UserId && a.str_Status == "CART")
                                   join p in db.tbl_Product on pr.lng_ProductID equals p.lng_ProductID

                                   select new Product
                                   {
                                       lng_ProductID = p.lng_ProductID,
                                       str_Productname = p.str_Productname,
                                       str_Imageurl = p.str_Imageurl,
                                       lng_Price = p.lng_Price,
                                       CartProductCount = 1
                                   }).ToList();
            ViewBag.username = "user@gmail.com";
            ViewBag.Count = db.tbl_PurchasedItem.Where(a => a.lng_UserID == UserId && a.str_Status == "CART").ToList().Count();
            return View(product);
        }
        [HttpPost]
        public ActionResult ViewCart(string cartproduct, Product product)
        {
            try
            {
                //var UserId = Convert.ToInt64(Request.Cookies["user_Id"].Value);
                var UserId = -9223372036854775807;
                product.str_cartProductIDs = cartproduct != "0" && cartproduct != "" ? cartproduct : null;
                product.array_str_cartProductIDs = product.str_cartProductIDs != null && product.str_cartProductIDs != "" ? product.str_cartProductIDs.Split(',') : null;
                product.CartProductCount = product.array_str_cartProductIDs != null ? product.array_str_cartProductIDs.Count() : 0;
                if (product.array_str_cartProductIDs != null && product.array_str_cartProductIDs.Count() > 0)
                {
                    for (int i = 0; i < product.array_str_cartProductIDs.Count(); i++)
                    {
                        var ProductId = Convert.ToInt64(product.array_str_cartProductIDs[i]);

                        if (ProductId != 0)
                        {
                            if (db.tbl_PurchasedItem.Where(a => a.lng_ProductID != ProductId && a.lng_UserID != UserId).Count() == 0)
                            {
                                var p = db.tbl_Product.Where(a => a.lng_ProductID == ProductId && a.str_ActivationStatus == "ACT").FirstOrDefault();

                                tbl_PurchasedItem PurchasedItem = new tbl_PurchasedItem();
                                PurchasedItem.lng_ProductID = p.lng_ProductID;
                                PurchasedItem.lng_UserID = Convert.ToInt64(UserId);
                                PurchasedItem.str_Status = "CART";
                                db.tbl_PurchasedItem.Add(PurchasedItem);
                                db.SaveChanges();
                            }
                            else
                            {
                                return Json(new { result = false, strMsg = "Product Already in the Cart" });
                            }
                        }
                    }
                    return Json(new { result = true, strMsg = "Product Added to Cart" });
                }
                else
                {
                    return Json(new { result = false, strMsg = "" });
                }
            }
            catch (Exception e)
            {
                return Json(new { result = false, strMsg =e.Message });
            }


        }
        [HttpGet]
        public ActionResult MyPurchase()
        {
            Product product = new Product();
            List<Product> cartList = new List<Product>();
            var UserId = -9223372036854775807;
            var ProductIDlist = db.tbl_PurchasedItem.Where(a => a.lng_UserID == UserId && a.str_Status == "CART").ToList();
            foreach (var item in ProductIDlist)
            {
                var ProductData = db.tbl_Product.Where(a => a.lng_ProductID == item.lng_ProductID && a.str_ActivationStatus == "ACT").FirstOrDefault();

                item.str_Status = "PSD";
                item.lng_Quantity = 1;
                item.lng_Total_Price = item.lng_Quantity * ProductData.lng_Price;
                item.dte_PurchasedDate = DateTime.UtcNow;
                db.SaveChanges();
            }
            product.ProductList = (from pr in db.tbl_PurchasedItem.Where(a => a.lng_UserID == UserId && a.str_Status == "PSD")
                                   join p in db.tbl_Product on pr.lng_ProductID equals p.lng_ProductID

                                   select new Product
                                   {
                                       lng_ProductID = p.lng_ProductID,
                                       str_Productname = p.str_Productname,
                                       str_Imageurl = p.str_Imageurl,
                                       lng_Price = p.lng_Price,
                                       CartProductCount = 1,
                                       lng_Quantity = pr.lng_Quantity,
                                       lng_Total_Price = pr.lng_Total_Price,
                                       lng_PurchaseID = pr.lng_PurchaseID
                                   }).ToList();
            var TotalCost = (db.tbl_PurchasedItem.Where(s => s.lng_UserID == UserId && s.str_Status == "PSD").Select(a => a.lng_Total_Price).ToList()).Sum();
            product.TotalPrice = TotalCost != 0 ? (int)TotalCost : 0;
            //ViewBag.userid = Request.Cookies["user_Id"].Value;

            ViewBag.username = "user@gmail.com";
            return View(product);
        }

        public ActionResult ProductPurchased(Product product)
        {
            var UserId = -9223372036854775807;
            var ProductIDlist = db.tbl_PurchasedItem.Where(a => a.lng_UserID == UserId && a.str_Status == "PSD").ToList();
            foreach (var item in ProductIDlist)
            {
                item.str_Status = "COM";
                item.lng_Quantity = 1;
                item.dte_PurchasedDate = DateTime.UtcNow;
                db.SaveChanges();
            }
            return RedirectToAction("Index", "User");
        }
        [HttpGet]
        public ActionResult CancelOrder(long id)
        {
            var PurchaseData = db.tbl_PurchasedItem.Where(a => a.lng_PurchaseID == id).FirstOrDefault();
            if (PurchaseData != null)
            {
                PurchaseData.str_Status = "DEL";
                db.SaveChanges();
            }
            return RedirectToAction("MyPurchase", "User");
        }
        [HttpGet]
        public ActionResult GetProductList(string searchdata,Product product)
       {

            HttpCookieCollection cookies = Request.Cookies;
            if (searchdata == "")
            {
                product.ProductList = (from p in db.tbl_Product.Where(a => a.str_ActivationStatus == "ACT")
                                       select new Product
                                       {
                                           lng_ProductID = p.lng_ProductID,
                                           str_Productname = p.str_Productname,
                                           str_Imageurl = p.str_Imageurl,
                                           lng_Price = p.lng_Price
                                       }).ToList();
            }
            else
            {
                product.ProductList = (from p in db.tbl_Product.Where(a => a.str_ActivationStatus == "ACT" && a.str_Productname.Contains(searchdata))
                                       select new Product
                                       {
                                           lng_ProductID = p.lng_ProductID,
                                           str_Productname = p.str_Productname,
                                           str_Imageurl = p.str_Imageurl,
                                           lng_Price = p.lng_Price
                                       }).ToList();
            }

            //ViewBag.userid = Request.Cookies["user_Id"].Value;
            ViewBag.username = "user@gmail.com";
            var UserId = -9223372036854775807;
            ViewBag.count = db.tbl_PurchasedItem.Where(a => a.lng_UserID == UserId && a.str_Status == "CART").ToList().Count();
            return PartialView("~/Views/User/_ProductList.cshtml", product);
        }
    }
}