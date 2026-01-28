using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using E_Commerce_Application.Models;
using System.IO;
using System.Text;

namespace E_Commerce_Application.Controllers
{
    public class ProductController : Controller
    {
        
        db_e_CommerceEntities db = new db_e_CommerceEntities();

        public ActionResult Index()
        {
            Product product = new Product();
            product.ProductList = (from p in db.tbl_Product.Where(a=>a.str_ActivationStatus=="ACT")
                                   select new Product
                                   {
                                     lng_ProductID=p.lng_ProductID,
                                     str_Productname=p.str_Productname,
                                     str_Imageurl=p.str_Imageurl,
                                     lng_Price=p.lng_Price
                                   }).ToList();
            return View(product);
        }

        [HttpGet]
        public ActionResult Details(long id)
        {
            Product product = new Product();
            var ProductData = db.tbl_Product.Where(a => a.lng_ProductID == id).FirstOrDefault();
            if (ProductData != null)
            {
                product.lng_ProductID = ProductData.lng_ProductID;
                product.str_Productname = ProductData.str_Productname;
                product.lng_Price = ProductData.lng_Price;
                product.str_Imageurl = ProductData.str_Imageurl;
            }
            return View(product);
        }

        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }

        
        [HttpPost]
        public ActionResult Create(Product product)
        {
            try
            {
                
                string filename = Path.GetFileNameWithoutExtension(product.Imagefile.FileName);
                string extension = Path.GetExtension(product.Imagefile.FileName);
                filename = filename + DateTime.Now.ToString("yymmssfff") + extension;
                product.str_Imageurl = "~/Image/" + filename;
                filename = Path.Combine(Server.MapPath("~/Image/"), filename);
                product.Imagefile.SaveAs(filename);
                product.str_Filename = Path.GetFileName(product.Imagefile.FileName);
                // TODO: Add insert logic here
                tbl_Product p = new tbl_Product();
                p.str_Productname = product.str_Productname;
                p.lng_Price = product.lng_Price;
                p.str_Imageurl = product.str_Imageurl;
                p.dte_CreatedDate = DateTime.UtcNow;
                p.str_ActivationStatus = "ACT";
                p.str_Imageurl = product.str_Imageurl;
                p.str_Filename = product.str_Filename;
                var User=db.tbl_User.Where(u=>u.str_Username== "admin@gmail.com" && u.str_Password=="admin").FirstOrDefault();
                if(User != null)
                {
                    p.lng_CreatedBy = User.lng_UserID;
                }
                db.tbl_Product.Add(p);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            catch(Exception e)
            {
                return View();
            }
        }

        [HttpGet]
        public ActionResult Edit(long id)
        {

            Product product = new Product();
            var ProductData = db.tbl_Product.Where(a => a.lng_ProductID == id).FirstOrDefault();
            if(ProductData != null)
            {
                product.lng_ProductID = ProductData.lng_ProductID;
                product.str_Productname = ProductData.str_Productname;
                product.lng_Price = ProductData.lng_Price;
                product.str_Imageurl = ProductData.str_Imageurl;
            }
            
                                     
            return View(product);
        }

       
        [HttpPost]
        public ActionResult Edit(long id, Product product)
        {
            try
            {
                tbl_Product p = db.tbl_Product.Where(a => a.lng_ProductID == id && a.str_ActivationStatus == "ACT").FirstOrDefault();

                if (product.Imagefile!=null)
                {
                    string filename = Path.GetFileNameWithoutExtension(product.Imagefile.FileName);
                    string extension = Path.GetExtension(product.Imagefile.FileName);
                    filename = filename + DateTime.Now.ToString("yymmssfff") + extension;
                    product.str_Imageurl = "~/Image/" + filename;
                    filename = Path.Combine(Server.MapPath("~/Image/"), filename);
                    product.Imagefile.SaveAs(filename);
                    product.str_Filename = Path.GetFileName(product.Imagefile.FileName);
                    p.str_Imageurl = product.str_Imageurl;
                    p.str_Filename = product.str_Filename;
                }
                
                p.str_Productname = product.str_Productname;
                p.lng_Price = product.lng_Price;
               
                p.dte_UpdatedDate = DateTime.UtcNow;
                var User = db.tbl_User.Where(u => u.str_Username == "admin@gmail.com" && u.str_Password == "admin").FirstOrDefault();
                if (User != null)
                {
                    p.lng_UpdatedBy = User.lng_UserID;
                }
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        [HttpGet]
        public ActionResult Delete(long id)
        {

            Product product = new Product();
            var ProductData = db.tbl_Product.Where(a => a.lng_ProductID == id).FirstOrDefault();
            if (ProductData != null)
            {
                product.lng_ProductID = ProductData.lng_ProductID;
                product.str_Productname = ProductData.str_Productname;
                product.lng_Price = ProductData.lng_Price;
                product.str_Imageurl = ProductData.str_Imageurl;
            }
            return View(product);
        }

      
        [HttpPost]
        public ActionResult Delete(long id, FormCollection collection)
        {
            try
            {
                
                tbl_Product p = db.tbl_Product.Where(a => a.lng_ProductID == id && a.str_ActivationStatus == "ACT").FirstOrDefault();
                p.str_ActivationStatus = "DEL";
                //db.tbl_Product.Remove(p);
                p.dte_UpdatedDate = DateTime.UtcNow;
                var User = db.tbl_User.Where(u => u.str_Username == "admin@gmail.com" && u.str_Password == "admin" && u.str_ActivationStatus=="ACT").FirstOrDefault();
                if (User != null)
                {
                    p.lng_UpdatedBy = User.lng_UserID;
                }
                db.SaveChanges();
                return RedirectToAction("Index");   
            }
            catch
            {
                return View();
            }
        }
    }
}
