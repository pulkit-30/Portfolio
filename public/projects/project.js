document.querySelector(".projectsDisplay").innerHTML = "";

projects.map((project) => {
  const newProject = document.createElement("div");
  newProject.classList.add("project-box");
  newProject.innerHTML = `<div class="content-inner">
            <div class="content-front">
              <div class="cf-inner">
                <img src=${project.Image} alt="projectImage" class="bg" />
                <div class="overlay"></div>
                <div class="inner">
                  <h2>${project.Title}</h2>
                  <h4>${project.caption}</h4>
                </div>
              </div>
            </div>
            <div class="content-back">
              <div class="cf-inner">
                <div class="inner">
                  <p>${project.description}</p>
                  <a href="${project.link}" class="btn">Visit &nbsp; <i class="fas fa-external-link-square-alt"></i></a>
                  <a href="${project.codeUrl}" class="btn"> Github <i class="fab fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>`;
  document.querySelector(".projectsDisplay").appendChild(newProject);
});
