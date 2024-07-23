export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employeeList = [];

  for (const department in allEmployees) {
    if (Object.hasOwn(allEmployees, department)) {
      employeeList.push(...allEmployees[department]);
    }
  }
  return employeeList;
}
