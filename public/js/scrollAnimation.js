const Nav = document.querySelector("#nav");
const changeColor = (i = 0) => {
  for (let x = 0; x < 6; x++) {
    if (x == i) {
      Nav.children[1].children[i].classList.add("gradient-text");
    } else {
      Nav.children[1].children[x].classList.remove("gradient-text");
    }
  }
};
changeColor();
const handelScroll = () => {
  var i = 0;
  if (window.location.pathname === "/") {
    if (window.pageYOffset >= 0 && window.pageYOffset <= 650) {
      changeColor(0);
    } else if (window.pageYOffset >= 650 && window.pageYOffset <= 1295) {
      changeColor(1);
    } else if (window.pageYOffset >= 2204) {
      changeColor(2);
    }
  }
  if (window.location.pathname === "/resume") {
    changeColor(4);
  }
  if (window.location.pathname === "/contact") {
    changeColor(5);
  }
};
handelScroll();
window.addEventListener("scroll", handelScroll);
