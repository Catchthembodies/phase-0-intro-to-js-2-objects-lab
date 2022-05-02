// Write your solution in this 
const employee = {}

function updateEmployeeWithKeyAndValue(employees, key, value){
    return Object.assign({}, employees, { [key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employees, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey (employee, key){
    const newObj = Object.assign({}, employee);
    delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey (employee, key){
    Object.assign({}, employee);
    delete employee[key];
    return employee;
}
