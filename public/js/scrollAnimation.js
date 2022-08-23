const Nav = document.querySelector('#nav');
const changeColor = (i = 0) => {
  for (let x = 0; x <= 6; x++) {
    if (x == i) {
      Nav.children[1].children[i].classList.add('gradient-text');
    } else {
      Nav.children[1].children[x].classList.remove('gradient-text');
    }
  }
};
changeColor();
const handelScroll = () => {
  if (window.location.pathname === '/') {
    if (window.pageYOffset >= 0 && window.pageYOffset <= 650) {
      changeColor(0);
    } else if (window.pageYOffset >= 650 && window.pageYOffset <= 1442) {
      changeColor(1);
    } else if (window.pageYOffset >= 1892) {
      changeColor(2);
    }
  } else if (window.location.pathname.includes('blog')) {
    changeColor(6);
  } else if (window.location.pathname.includes('projects')) {
    changeColor(3);
  } else if (window.location.pathname.includes('resume')) {
    changeColor(4);
  } else if (window.location.pathname.includes('contact')) {
    changeColor(5);
  }
};
handelScroll();
window.addEventListener('scroll', handelScroll);
