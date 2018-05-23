var projects = document.getElementById('projects');

if (Modernizr.promises && Modernizr.templatestrings && Modernizr.fetch && Modernizr.json)
{
  console.log("Promises, Template Strings, Fetch and JSON are supported.");
  fetch('https://api.github.com/users/KeziahMoselle/repos')
  .then(response => response.json())
  .then(repositories => {
    console.log(repositories);
    repositories.forEach(repository => {
      console.log(`OK: ${repository.full_name}`);
      projects.insertAdjacentHTML('afterbegin', `
            <div class="col s12 l4">
                <div class="card">
                    <div class="card-image">
                        <img src="${repository.owner.avatar_url}">
                        <span class="card-title">${repository.full_name}</span>
                        <a href="${repository.homepage}" class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">open_in_new</i></a>
                    </div>
                    <div class="project card-content">
                        <p>
                            ${repository.description}
                        </p>
                    </div>
                </div>
            </div>
            `);
    });
  });

fetch('https://api.github.com/orgs/dream-io/repos')
  .then(response => response.json())
  .then(repositories => {
    repositories.forEach(repository => {
      console.log(`OK: ${repository.full_name}`);
      projects.insertAdjacentHTML('beforeend', `
            <div class="col s12 l4">
                <div class="card">
                    <div class="card-image">
                        <img src="${repository.owner.avatar_url}">
                        <span class="card-title">${repository.full_name}</span>
                        <a href="${repository.homepage}" class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">open_in_new</i></a>
                    </div>
                    <div class="card-content">
                        <p>
                            ${repository.description}
                        </p>
                    </div>
                </div>
            </div>
            `);
    });
  });
}
else 
{
  console.log('Fallback');
  console.log('Promises, Template Strings, Fetch or JSON are NOT supported.');
  var requestRepo = new XMLHttpRequest();
  requestRepo.open('GET', 'https://api.github.com/users/KeziahMoselle/repos', true);
  requestRepo.onreadystatechange = function()
  {
    if (this.readyState === 4 && this.status == 200)
    {
        var repositories = JSON.parse(this.responseText);
        repositories.forEach(function(repository) {
          console.log('OK: ', repository.full_name);
          projects.insertAdjacentHTML('afterbegin', '<div class="col s12 l4"><div class="card"><div class="card-image"><img src="'+ repository.owner.avatar_url +'"><span class="card-title">'+ repository.full_name +'</span><a href="'+ repository.homepage +'" class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">open_in_new</i></a></div><div class="card-content"><p>'+ repository.description +'</p></div></div></div>');
        });
    }
  }
  requestRepo.send();

  var requestOrg = new XMLHttpRequest();
  requestOrg.open('GET', 'https://api.github.com/orgs/dream-io/repos', true);
  requestOrg.onreadystatechange = function()
  {
    if (this.readyState === 4 && this.status == 200)
    {
        var repositories = JSON.parse(this.responseText);
        repositories.forEach(function(repository) {
          console.log('OK: ', repository.full_name);
          projects.insertAdjacentHTML('beforeend', '<div class="col s12 l4"><div class="card"><div class="card-image"><img src="'+ repository.owner.avatar_url +'"><span class="card-title">'+ repository.full_name +'</span><a href="'+ repository.homepage +'" class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">open_in_new</i></a></div><div class="card-content"><p>'+ repository.description +'</p></div></div></div>');
        });
    }
  }
  requestOrg.send();
}