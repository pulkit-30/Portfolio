const doc = document;
const navbar = document.getElementById("nav");
const know_more = doc.getElementById("Know-More");
const loader = doc.getElementById("loader");
if (window.location.pathname != "/") {
  navbar.classList.add("b-nav");
} else {
  doc.addEventListener("scroll", () => {
    if (window.pageYOffset > 779) navbar.classList.add("b-nav");
    if (window.pageYOffset < 779) navbar.classList.remove("b-nav");
  });
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
  }, 2000);
});

const skill_list = document.querySelectorAll(".skill-list");

skill_list.forEach((e) => {
  for (let i = 0; i < 5; i++) {
      console.log(e.children[i].textContent)
      e.children[i].children[0].textContent=e.children[i].textContent.trim()[0]
  }
});
