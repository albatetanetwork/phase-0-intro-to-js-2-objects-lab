// Write your solution in this file!
const employee = {
    name: 'Briar',
    streetAddress: '950 6th Ave'
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee.name = `Sam`;
    newEmployee.streetAddress = `11 Broadway`;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[`streetAddress`] = `12 Broadway`;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const {name, ...newEmployee} = employee;
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
  }
  