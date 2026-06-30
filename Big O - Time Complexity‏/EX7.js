const employeesData = {
  "ax01": { name: "Ray", age: 28, salary: 1300 },
  "qs84": { name: "Lucius", age: 31, salary: 840 },
  "bg33": { name: "Taylor", age: 18, salary: 2700 }
};
const findEmployeeSalary = function(employeeID) {
  if (employeesData[employeeID]) {
    return employeesData[employeeID].salary;
  }
  return "Employee not found"; 
};


console.log(findEmployeeSalary("qs84")); // Output: 840
console.log(findEmployeeSalary("ax01")); // Output: 1300