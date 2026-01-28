using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace E_Commerce_Application.Models
{
    public class User
    {
        [Required(ErrorMessage = "UserName Required")]
        public string str_Username { get; set; }
        
        [Required(ErrorMessage = "Password Required")]
        public string str_Password { get; set; }
        
    }
}