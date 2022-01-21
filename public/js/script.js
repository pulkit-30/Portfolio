const doc = document;
const navbar = document.getElementById("nav");
const know_more = doc.getElementById("Know-More");
const loader = doc.getElementById("loader");
const skill_list = document.querySelectorAll(".skill-list");
const hamburger = document.querySelector('.hamburger')
const handelMenuDisplay = ()=>{
  doc.querySelectorAll('.line').forEach(line=>{
    line.classList.toggle('active-line')
  })
  doc.querySelector('.ham-list-menu').classList.toggle('menu-slide')
  doc.querySelector('body').classList.toggle('prevent-scroll')
  doc.querySelector('.backdrop').classList.toggle('no-display')
  doc.querySelectorAll('.navbar .menu-slide li').forEach(li=>{
    li.addEventListener('click',handelMenuDisplay);
  })
}
hamburger.addEventListener('click',handelMenuDisplay)

doc.querySelector('.backdrop').addEventListener('click',handelMenuDisplay)
const HandelNavBarDisplay = () => {
  if (window.pageYOffset > 380) navbar.classList.add("b-nav");
  if (window.pageYOffset < 380) navbar.classList.remove("b-nav");
};

HandelNavBarDisplay();

if (window.location.pathname != "/") {
  navbar.classList.add("b-nav");
} else {
  doc.addEventListener("scroll", HandelNavBarDisplay);
  know_more.addEventListener("click", () => {
    window.scrollTo(0, 1000);
  });
}
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.opacity = 0;
  }, 500);
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
});

skill_list.forEach((e) => {
  for (let i = 0; i < 5; i++) {
    e.children[i].children[0].textContent = e.children[i].textContent.trim()[0];
  }
});

