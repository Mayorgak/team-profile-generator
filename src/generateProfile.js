
const renderEmployees = Employees => {


const renderManager = Manager => {
    return `
    <div class="card mx-auto" style="width: 18rem">
  
    <h5 class="card-header bg-primary">${Manager.getRole()}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${Manager.name}</li>
        <li class="list-group-item"><a href="mailto:">${Manager.email}</a></li>
        <li class="list-group-item">${Manager.getOfficeNumber()}</li>
    </ul>
</div>

    `;
}

const renderEngineer = Engineer => {
  return `
    <div class="card mx-auto" style="width: 18rem">
    
    <h5 class="card-header bg-primary">${Engineer.getRole()}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${Engineer.name}</li>
        <li class="list-group-item"><a href="mailto:">${Engineer.email}</a></li>
        <li class="list-group-item"><a href="https://github.com/">${Engineer.getGithub()}</a></li>
    </ul>
</div>

    `;
};


const renderIntern = Intern => {
  return `
    <div class="card mx-auto" style="width: 18rem">
    
    <h5 class="card-header bg-primary">${Intern.getRole()}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${Intern.name}</li>
        <li class="list-group-item"><a href="mailto:">${Intern.email}</a></li>
        <li class="list-group-item">${Intern.getSchool()}</li>
    </ul>
</div>

    `;
};

 const html = [];
 html.push(
   Employees
     .filter((employee) => employee.getRole() === "Manager")
     .map((manager) => renderManager(manager))
 );
 html.push(
   Employees
   .filter((employee) => employee.getRole() === "Engineer")
     .map((engineer) => renderEngineer(engineer))
     .join("")
 );
 html.push(
   Employees
   .filter((employee) => employee.getRole() === "Intern")
     .map((intern) => renderIntern(intern))
     .join("")
 );
 console.log(html);
 return html.join("");


}

generatePage = teamArray => {
  
 
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <script src="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></script>
  </head>

  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading bg-warning">
          <h1 class="text-center">My Team</h1>
        
           
          
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
          ${renderEmployees(teamArray)}
        </div>
      </div>
    </div>
  </body>
</html>
    `;
}


module.exports = generatePage;