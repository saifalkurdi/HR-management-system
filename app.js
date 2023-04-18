"use strict";

function Employee (fullName, departement, level) {
  this.fullName = fullName;
  this.departement = departement;
  this.level = level;
}

// const obj = new Employee('saif','marketing','junior');
// console.log(obj)

// generate four digits unique id

// Render the data
Employee.prototype.render = function(){
  const Employee = document.getElementById('employeeEle');
  // creat an Elementmnt
  // append the elemnt to the parent
  // adding the text to the created elemnt
  const divEle = document.createElement('div');
  employeeEle.appendChild(divEle);

  const pEle = document.createElement('p');
  pEle.textContent = this.fullName;
divEle.appendChild(pEle)

const p1Ele = document.createElement('p');
  p1Ele.textContent = this.departement;
divEle.appendChild('p1Ele')

const p2Ele = document.createElement('p');
  p2Ele.textContent = this.level;
divEle.appendChild('p2Ele')
}





// Adding new order from the form
function addNewData(employeedata) {
  employeedata.preventDefault();
  // console.log(employeedata.target.fullName.value)
  // console.log(employeedata.target.dep.value)
  // console.log(employeedata.target.lev.value)
  let fullName = employeedata.target.fullName.value;
  let departement = employeedata.target.departement.value;
  let level = employeedata.target.level.value;
  const newForm = new Employee(fullName, departement, level);
  console.log(newForm);
}



const employeeForm = document.getElementById("employeeForm");
// console.log(employeeInformation)
employeeForm.addEventListener("submit", addNewData);
