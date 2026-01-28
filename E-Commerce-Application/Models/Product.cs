using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace E_Commerce_Application.Models
{
    public class Product
    {
        public long lng_ProductID { get; set; }
        [Required(ErrorMessage = "Enter Product Name ")]

        public string str_Productname { get; set; }
        [Required(ErrorMessage = "Upload Image")]
        public string str_Imageurl { get; set; }
        [Required(ErrorMessage = "Enter Price ")]
        public Nullable<int> lng_Price { get; set; }
        public string str_ActivationStatus { get; set; }
        public Nullable<long> lng_CreatedBy { get; set; }
        public Nullable<System.DateTime> dte_CreatedDate { get; set; }
        public Nullable<long> lng_ModifiedBy { get; set; }
        public Nullable<System.DateTime> dte_UpdatedDate { get; set; }
        public List<Product> ProductList { get; set; }
        public HttpPostedFileBase Imagefile { get; set; }
        public string str_Filename { get; set; }
        public string str_cartProductIDs { get; set; }
        public string[] array_str_cartProductIDs { get; set; }
        public int CartProductCount { get; set; }

        //purchased item
        public long lng_PurchaseID { get; set; }
        public Nullable<long> lng_UserID { get; set; }
        public int count { get; set; }
        public string str_Status { get; set; }
        public int TotalPrice { get; set; }
        public Nullable<System.DateTime> dte_PurchasedDate { get; set; }
        public Nullable<int> lng_Quantity { get; set; }
        public Nullable<int> lng_Total_Price { get; set; }
    }
}