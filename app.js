function Employee(EmployeeID, Fullname, Department, Level, Imageurl){
this.EmployeeID = EmployeeID
this.Fullname = Fullname
this.Department = Department
this.Level = Level
this.Imageurl = Imageurl
}

Employee.prototype.calculateSalary = function(level){
  let minJunior = 500;
  let maxJunior = 1000;
  let minMidSenoir = 1000;
  let maxMidSenior = 1500;
  let minSenior = 1500;
  let maxSenior = 2000;
  let salary;
if(level === 'Junior')
{
  salary = Math.floor(Math.random() * (maxJunior - minJunior + 1) + minJunior)
}
else if(level==='Mid-Senior'){
  salary = Math.floor(Math.random() * (maxMidSenior - minMidSenoir + 1) + minMidSenoir)
}
else{
  salary = Math.floor(Math.random() * (maxSenior - minSenior + 1) + minSenior)

}
let netSalary = salary-(salary*(7.5/100))
return netSalary; 
}

Employee.prototype.render = function(){
  let name = this.Fullname;
  let salary = this.calculateSalary(this.Level);
  const nameElement = document.createElement('span');
  const salaryElement = document.createElement('span');
  const employeeElement = document.createElement('div')
  nameElement.textContent =name 
  salaryElement.textContent = salary

  const employeesElement = document.getElementById('employees')

  employeeElement.appendChild(nameElement);
  employeeElement.appendChild(salaryElement);

  employeesElement.appendChild(employeeElement)
};


const employees = [
  new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior'),
  new Employee(1001, 'Lana Ali', 'Finance', 'Senior'	),
  new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior'),
  new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior'),
  new Employee(1004	, 'Omar Zaid	', 'Development	', 'Senior'),
  new Employee(1005, 'Rana Saleh	','Development', 'Junior'),
  new Employee(1006, 'Hadi Ahmad	', 'Finance	','Mid-Senior'),
];

for(let i = 0; i<employees.length; i++){
  employees[i].render()
}







