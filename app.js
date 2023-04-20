"use strict";
// constructor function
function Employee (fullName, department, level,) {
  this.fullName = fullName;
  this.department = department;
  this.level = level;
 
}

// const obj = new Employee('saif','marketing','junior');
// console.log(obj)

// generate four digits unique id
// prototype
// Render the data
Employee.prototype.render = function(){
  const Employee = document.getElementById('employeeEle');
  let unique = Math.ceil(Math.random()*10000)
  // creat an Elementmnt
  // append the elemnt to the parent
  // adding the text to the created elemnt
  const pEle3 = document.createElement('p')
  const pEle = document.createElement('p');
  const p1Ele = document.createElement('p');
  const p2Ele = document.createElement('p');
  const divEle = document.createElement('div');
 
  pEle3.textContent = unique
  pEle.textContent = this.fullName;
  p1Ele.textContent = this.department;
  p2Ele.textContent = this.level;

divEle.appendChild(pEle3)
  divEle.appendChild(pEle)
  divEle.appendChild(p1Ele)
  divEle.appendChild(p2Ele)
  Employee.appendChild(divEle);
}





// Adding new order from the form
function addNewData(employeedata) {
  employeedata.preventDefault();
  // console.log(employeedata.target.fullName.value)
  // console.log(employeedata.target.dep.value)
  // console.log(employeedata.target.lev.value)
  let fullName = employeedata.target.fullName.value;
  let department = employeedata.target.department.value;
  let level = employeedata.target.level.value;
  const newForm = new Employee(fullName, department, level);
  newForm.render()
  console.log(newForm);
}



const employeeForm = document.getElementById("employeeForm");
// console.log(employeeInformation)
employeeForm.addEventListener("submit", addNewData);
