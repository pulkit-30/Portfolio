(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // public/js/script.js
  var require_script = __commonJS({
    "public/js/script.js"() {
      var doc = document;
      var navbar = document.getElementById("nav");
      var know_more = doc.getElementById("Know-More");
      var loader = doc.getElementById("loader");
      var skill_list = document.querySelectorAll(".skill-list");
      var hamburger = document.querySelector(".hamburger");
      var handelMenuDisplay = () => {
        doc.querySelectorAll(".line").forEach((line) => {
          line.classList.toggle("active-line");
        });
        doc.querySelector(".ham-list-menu").classList.toggle("menu-slide");
        doc.querySelector("body").classList.toggle("prevent-scroll");
        doc.querySelector(".backdrop").classList.toggle("no-display");
        doc.querySelectorAll(".navbar .menu-slide li").forEach((li) => {
          li.addEventListener("click", handelMenuDisplay);
        });
      };
      hamburger.addEventListener("click", handelMenuDisplay);
      doc.querySelector(".backdrop").addEventListener("click", handelMenuDisplay);
      var HandelNavBarDisplay = () => {
        if (window.pageYOffset > 50)
          navbar.classList.add("b-nav");
        if (window.pageYOffset < 50)
          navbar.classList.remove("b-nav");
      };
      HandelNavBarDisplay();
      doc.addEventListener("scroll", HandelNavBarDisplay);
      know_more.addEventListener("click", () => {
        window.scrollTo(0, 1e3);
      });
      window.addEventListener("load", () => {
        setTimeout(() => {
          loader.style.opacity = 0;
        }, 500);
        setTimeout(() => {
          loader.style.display = "none";
        }, 1e3);
      });
      skill_list.forEach((e) => {
        for (let i = 0; i < 5; i++) {
          e.children[i].children[0].textContent = e.children[i].textContent.trim()[0];
        }
      });
      var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2e3;
        this.txt = "";
        this.tick();
        this.isDeleting = false;
      };
      TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
        var that = this;
        var delta = 200 - Math.random() * 100;
        if (this.isDeleting) {
          delta /= 2;
        }
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      window.onload = function() {
        var elements = document.getElementsByClassName("typewrite");
        for (var i = 0; i < elements.length; i++) {
          var toRotate = elements[i].getAttribute("data-type");
          var period = elements[i].getAttribute("data-period");
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
        }
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
      };
    }
  });

  // public/js/scrollAnimation.js
  var require_scrollAnimation = __commonJS({
    "public/js/scrollAnimation.js"() {
      var Nav = document.querySelector("#nav");
      var changeColor = (i = 0) => {
        for (let x = 0; x <= 4; x++) {
          if (x == i) {
            Nav.children[1].children[i].classList.add("gradient-text");
          } else {
            Nav.children[1].children[x].classList.remove("gradient-text");
          }
        }
      };
      changeColor();
      var handelScroll = () => {
        if (window.pageYOffset >= 0 && window.pageYOffset <= 650) {
          changeColor(0);
        } else if (window.pageYOffset >= 650 && window.pageYOffset <= 1442) {
          changeColor(1);
        } else if (window.pageYOffset >= 1892) {
          changeColor(2);
        }
      };
      handelScroll();
      window.addEventListener("scroll", handelScroll);
    }
  });

  // public/js/main.js
  require_script();
  require_scrollAnimation();
})();
