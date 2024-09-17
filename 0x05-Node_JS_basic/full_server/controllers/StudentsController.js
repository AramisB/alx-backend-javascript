import readDatabase from '../utils.js';
class StudentsController {
  static getAllStudents(request, response) {
    const dbPath = './database.csv';
    readDatabase(dbPath).then((data) => {
      let message = 'This is the list of our students';
      const sortedFields = Object.keys(data).sort(
        (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
      );
      sortedFields.forEach((field) => {
        message += `\nNumber of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`;
      });
      response.send(message);
    })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const dbPath = './database.csv';
    readDatabase(dbPath).then((data) => {
      let message = 'This is the list of our students';
      const sortedFields = Object.keys(data).sort(
        (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
      );
      sortedFields.forEach((field) => {
        if (field === request.params.major) {
          message += `\nNumber of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`;
        }
      });
      response.send(message);
    })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;