const projects = async () => {
  await fetch("https://secure-cliffs-26248.herokuapp.com/project/")
    .then((res) => res.json())
    .then((projects) => {
      document.querySelector(".projectsDisplay").innerHTML = "";
      projects.shift();
      projects.map((project) => {
        const newProject = document.createElement("div");
        newProject.classList.add("project-box");
        newProject.innerHTML = `<div class="content-inner">
            <div class="content-front">
              <div class="cf-inner">
                <img src=${project.Image} alt="projectImage" class="bg" />
                <div class="overlay"></div>
                <div class="inner">
                  <h2>${project.ProjectName}</h2>
                  <h4>${project.Caption}</h4>
                </div>
              </div>
            </div>
            <div class="content-back">
              <div class="cf-inner">
                <div class="inner">
                  <div class="dec-icon">
                    <h4>${project.ProjectName}</h4>
                  </div>
                  <p>${project.Detail}</p>
                  <a href="${project.Link}">
                    <button class="btn"> Visit </button>
                  </a>
                </div>
              </div>
            </div>
          </div>`;
        document.querySelector(".projectsDisplay").appendChild(newProject);
      });
    })
    .catch((err) => console.log(err));
};
projects();
