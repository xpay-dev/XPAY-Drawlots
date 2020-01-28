using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Drawlots.Models
{
    public class LoginModel
    {
        [Required(ErrorMessage = "Email Address is required")]
        public string EmailAddress { get; set; }

        [Required(ErrorMessage = "Passsword is required")]
        public string Password { get; set; }

    }
}