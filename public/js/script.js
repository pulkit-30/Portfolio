const doc = document;
const navbar = document.getElementById('nav');
const know_more = doc.getElementById('Know-More');
const loader = doc.getElementById('loader');
const skill_list = document.querySelectorAll('.skill-list');
const hamburger = document.querySelector('.hamburger');
const handelMenuDisplay = () => {
  doc.querySelectorAll('.line').forEach((line) => {
    line.classList.toggle('active-line');
  });
  doc.querySelector('.ham-list-menu').classList.toggle('menu-slide');
  doc.querySelector('body').classList.toggle('prevent-scroll');
  doc.querySelector('.backdrop').classList.toggle('no-display');
  doc.querySelectorAll('.navbar .menu-slide li').forEach((li) => {
    li.addEventListener('click', handelMenuDisplay);
  });
};
hamburger.addEventListener('click', handelMenuDisplay);

doc.querySelector('.backdrop').addEventListener('click', handelMenuDisplay);
const HandelNavBarDisplay = () => {
  if (window.pageYOffset > 380) navbar.classList.add('b-nav');
  if (window.pageYOffset < 380) navbar.classList.remove('b-nav');
};

HandelNavBarDisplay();

doc.addEventListener('scroll', HandelNavBarDisplay);
know_more.addEventListener('click', () => {
  window.scrollTo(0, 1000);
});
window.addEventListener('load', () => {
  setTimeout(() => {
    loader.style.opacity = 0;
  }, 500);
  setTimeout(() => {
    loader.style.display = 'none';
  }, 1000);
});

skill_list.forEach((e) => {
  for (let i = 0; i < 5; i++) {
    e.children[i].children[0].textContent = e.children[i].textContent.trim()[0];
  }
});

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
  document.body.appendChild(css);
};
