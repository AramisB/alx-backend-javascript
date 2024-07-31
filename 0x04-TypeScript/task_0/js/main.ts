// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location
// Requirements:

// When running, Webpack should return No type errors found.
// Every variable should use TypeScript when possible.

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Ann',
    lastName: 'Mutuku',
    age: 23,
    location: 'Machakos'
};
const student2: Student = {
    firstName: 'Mark',
    lastName: 'Gatua',
    age: 30,
    location: 'Kitengela'
}

const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement("table");
    
    const headerRow = table.insertRow();
    const headerCell1 = headerRow.insertCell();
    headerCell1.textContent = "First Name";
    const headerCell2 = headerRow.insertCell();
    headerCell2.textContent = "Location";
    
    studentsList.forEach((student) => {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        
        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
    });
    
    document.body.appendChild(table);
});
