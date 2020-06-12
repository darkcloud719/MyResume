using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyResume.Controllers
{
    public class HomeController : Controller
    {
        private IConfiguration _cfg;

        public HomeController(IConfiguration cfg)
        {
            _cfg = cfg;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
