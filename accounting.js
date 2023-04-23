const obj = {
  administration : {
    name : 'administration',
    numberOfEmployees: 0,
    avgSalary : 0,
    totalSalary : 0
  },
  development : {
    name : 'development',
    numberOfEmployees: 0,
    avgSalary : 0,
    totalSalary : 0
  },
  marketing : {
    name : 'marketing',
    numberOfEmployees: 0,
    avgSalary : 0,
    totalSalary : 0
  },
  finance : {
    name : 'finance',
    numberOfEmployees: 0,
    avgSalary : 0,
    totalSalary : 0
  }
};


function getDataFromLocalStorage(){
  let stringObj = localStorage.getItem('inf');
  let parseObj = JSON.parse(stringObj);
 return parseObj
}


const employeesList = getDataFromLocalStorage();

for(let i = 0; i < employeesList.length; i++) {
  const employee = employeesList[i];
  if(employee.department === 'Administration') {
    obj.administration.numberOfEmployees += 1;
    obj.administration.totalSalary += employee.salary;
    obj.administration.avgSalary = obj.administration.totalSalary / obj.administration.numberOfEmployees
  } else if (employee.department === 'Development'){ 
    obj.development.numberOfEmployees += 1;
    obj.development.totalSalary += employee.salary;
    obj.development.avgSalary = obj.development.totalSalary / obj.development.numberOfEmployees
    
  }else if(employee.department === 'Marketing'){
    obj.marketing.numberOfEmployees += 1;
    obj.marketing.totalSalary += employee.salary;
    obj.marketing.avgSalary = obj.marketing.totalSalary / obj.marketing.numberOfEmployees
  }else{
    obj.finance.numberOfEmployees += 1;
    obj.finance.totalSalary += employee.salary;
    obj.finance.avgSalary = obj.finance.totalSalary / obj.finance.numberOfEmployees
  }
}

for(let key in obj) {
  const dept = obj[key]
  const tbody = document.getElementById('tbody');

  const nameTD = document.createElement('td');
  const noOfEmpTD = document.createElement('td');
  const avgTD = document.createElement('td');
  const totalTD = document.createElement('td');

  nameTD.textContent = dept.name;
  noOfEmpTD.textContent = dept.numberOfEmployees;
  avgTD.textContent = dept.avgSalary;
  totalTD.textContent = dept.totalSalary;

  
  const departmentRow = document.createElement('tr');
  
  departmentRow.appendChild(nameTD);
  departmentRow.appendChild(noOfEmpTD);
  departmentRow.appendChild(avgTD);
  departmentRow.appendChild(totalTD);

  tbody.appendChild(departmentRow)
}

const totalNumber = document.getElementById('totalNumber');
const totalSalary = document.getElementById('totalSalary');
const avgSal = document.getElementById('avgSal');

const totalNumberValue = obj.administration.numberOfEmployees + obj.development.numberOfEmployees + obj.marketing.numberOfEmployees + obj.finance.numberOfEmployees;
const totalSalaryValue = obj.administration.totalSalary + obj.development.totalSalary + obj.marketing.totalSalary + obj.finance.totalSalary;
const avgSalValue = totalSalaryValue/totalNumberValue;

totalNumber.textContent = 'total number of all employees : ' + totalNumberValue;
totalSalary.textContent = 'total salary of all employees : ' + totalSalaryValue;
avgSal.textContent = 'average salary of all employees' + avgSalValue;