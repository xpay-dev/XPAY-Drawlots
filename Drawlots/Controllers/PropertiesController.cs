﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Drawlots.Controllers
{
    public class PropertiesController : Controller
    {
        // GET: Properties
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult PropertyDetails()
        {
            return View();

        }
    }
}