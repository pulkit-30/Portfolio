/**
 * Experience
 */
const exp_array = [
  // {
  //   title:
  //     '<a href="https://summerofcode.withgoogle.com/programs/2022/organizations/circuitverseorg" target="_blank">Google Summer of Code</a>',
  //   position: '<a href="https://github.com/CircuitVerse">Circuitverse</a>',
  //   time: '2022',
  // },
  {
    title: 'Open Source Coordinator',
    position:
      '<a href="https://www.linkedin.com/company/geeksforgeeks-abesec/">GeeksForGeeks ABESEC</a>',
    time: 'Jul 2021 - Present',
  },
];

const exp = document.getElementById('Exp-Main-Box');
let exp_html = '';

exp_array.forEach((exp) => {
  exp_html =
    exp_html +
    `<div class="flex exp-box">
    <object data="bullet.svg" width="50" height="50" class="object"></object>
    <div class="line"></div>
    <div class="exp-para flex column">
    <h1 class="gradient-text">${exp.title}</h1>
    <div>▸ ${exp.position}</div>
    <strong style="font-size:15px">${exp.time}</strong>
    </div>
    </div>`;
});

exp.innerHTML = exp_html;
