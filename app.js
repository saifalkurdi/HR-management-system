"use strict";
// constructor function
function Employee(fullName, department, level, salary) {
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.salary = salary
  // Employee.allData.push(this)
}
Employee.allData = [];


// const obj = new Employee('saif','marketing','junior');
// console.log(obj)

// generate four digits unique id

// prototype

// Render the data
Employee.prototype.render = function () {
  const Employee = document.getElementById("employeeEle");
  // employeeEle.innerHTML = '';
  let unique = Math.ceil(Math.random() * 10000);
    
  // creat an Elementmnt
  // append the elemnt to the parent
  // adding the text to the created elemnt
  const pEle3 = document.createElement("p");
  const pEle = document.createElement("p");
  const p1Ele = document.createElement("p");
  const p2Ele = document.createElement("p");
  const divEle = document.createElement("div");

  
  pEle.textContent = this.fullName;
  p1Ele.textContent = this.department;
  p2Ele.textContent = this.level;
  pEle3.textContent = unique;


  divEle.appendChild(pEle3);
  divEle.appendChild(pEle);
  divEle.appendChild(p1Ele);
  divEle.appendChild(p2Ele);
  Employee.appendChild(divEle);
  
};

function calculateSalary(level){
  let minJunior = 500;
  let maxJunior = 1000;
  let minMidSenoir = 1000;
  let maxMidSenior = 1500;
  let minSenior = 1500;
  let maxSenior = 2000;
  let salary;
if(level === 'Junior')
{
  salary = Math.ceil(Math.random() * (maxJunior - minJunior + 1) + minJunior)
}
else if(level==='Mid-Senior'){
  salary = Math.ceil(Math.random() * (maxMidSenior - minMidSenoir + 1) + minMidSenoir)
}
else{
  salary = Math.ceil(Math.random() * (maxSenior - minSenior + 1) + minSenior)

}
let netSalary = salary-(salary*(7.5/100))
return netSalary; 
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
  let salary = calculateSalary(level)

  const newForm = new Employee(fullName, department, level, salary);

  Employee.allData.push(newForm)
  newForm.render();
  console.log(newForm);
  // console.log(Employee.allData)
  saveData();
}

// saving the data inside the localstorage
function saveData(){
let data = JSON.stringify(Employee.allData);
localStorage.setItem('inf' , data);
}

// Gitting the data from the localStorage
function getDataFromLocalStorage(){
  let stringObj = localStorage.getItem('inf');
  let parseObj = JSON.parse(stringObj);
  console.log(parseObj)
  if(parseObj !== null){
    Employee.allData = parseObj;
    for(let i = 0; i < parseObj.length; i++){
      const emp = new Employee(parseObj[i].fullName, parseObj[i].department, parseObj[i].level);
      emp.render()
    }
  }
}


const employeeForm = document.getElementById("employeeForm");
// console.log(employeeInformation)
employeeForm.addEventListener("submit", addNewData);
getDataFromLocalStorage();