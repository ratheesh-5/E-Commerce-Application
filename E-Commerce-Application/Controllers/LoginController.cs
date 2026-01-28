using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using E_Commerce_Application.Models;

namespace E_Commerce_Application.Controllers
{
    public class LoginController : Controller
    {
        db_e_CommerceEntities db = new db_e_CommerceEntities();
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Login(User user)
        {
            //var response = new { result = true, strmsg = "", userlogin =""};
            try
            {
                // TODO: Add insert logic here
               
                if (user.str_Username == null && user.str_Password == null)
                {
                    return Json(new { result = false, strMsg = "Required Usename and Password" });
                }
                if (user.str_Username == null && user.str_Password != null)
                {
                    return Json(new { result = false, strMsg = "Required Usename" });
                }
                if (user.str_Username != null && user.str_Password == null)
                {
                    return Json(new { result = false, strMsg = "Required Password" });
                }

                if (user.str_Username!=null && user.str_Password != null)
                {
                    var logindata = db.tbl_User.Where(a => a.str_Username == user.str_Username && a.str_Password == user.str_Password).FirstOrDefault();
                    {
                        if(logindata !=null && logindata.str_Username=="admin@gmail.com" && logindata.str_Password=="admin" && logindata.str_ActivationStatus == "ACT")
                        {
                            CookeiesAdd();
                            return Json(new { result = true, strMsg = "Login Successfully" ,userlogin="admin"});
                            //return RedirectToAction("Index","Product");
                        }
                        else if(logindata!=null && logindata.str_ActivationStatus == "ACT")
                        {
                            CookeiesAdd();
                            return Json(new { result = true, strMsg = "Login Successfully", userlogin = "user" });
                            //return RedirectToAction("Index", "User");
                        }
                        else
                        {
                            return Json(new { result = true, strMsg = "Invalid Usename/Password" });
                        }
                        void  CookeiesAdd()
                        {

                            HttpCookie loginInfo = new HttpCookie("loginInfo");
                            loginInfo["user_Id"] =Convert.ToString(logindata.lng_UserID);
                            loginInfo["username"] = logindata.str_Username;
                            Request.Cookies.Add(loginInfo);

                        }
                        
                       
                    }
                }
                else
                {
                    return Json(new { result = true, strMsg = "Invalid Usename/Password" });
                }
            }
            catch
            {
                return View();
            }
        }
        public ActionResult LogOut()
        {
            return RedirectToAction("Login");
        }
    }
}