document.querySelector('.projectsDisplay').innerHTML = '';

projects.map((project) => {
  const newProject = document.createElement('div');
  newProject.classList.add('project-box');
  newProject.innerHTML = `
          <div class="content-inner">
              <div class="img-div"><img src=${project.Image} alt="projectImage" class="bg" /></div>
              <div class="overlay"></div>
              <div class="inner">
                <h2 class="gradient-text">${project.Title}</h2>
                <h4>${project.caption}</h4>
              </div>
            <div class="flex column">
              <p class="cf-inner">${project.description}</p>
                <div class="flex" style="flex-wrap:wrap;">
                <a href="${project.link}" class="btn flex gradient-text">Visit &nbsp; <i class="fas fa-external-link-square-alt"></i></a>
                <a href="${project.codeUrl}" class="btn flex gradient-text"> Github <i class="fab fa-github"></i></a></div>
               </div>
          </div>`;
  document.querySelector('.projectsDisplay').appendChild(newProject);
});
