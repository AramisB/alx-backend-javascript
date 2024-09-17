const fs = require('fs');

module.exports = function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      let response = '';
      let msg;

      const content = data.toString().split('\n');
      let students = content.filter((item) => item);

      // Parse the students' information
      students = students.map((item) => item.split(','));

      const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
      msg = `Number of students: ${NUMBER_OF_STUDENTS}\n`;
      console.log(msg);
      response += msg;

      const fields = {};
      for (const i in students) {
        if (i !== 0) {
          if (!fields[students[i][3]]) fields[students[i][3]] = [];
          fields[students[i][3]].push(students[i][0]);
        }
      }

      delete fields.field;

      // Add the count and list for each field
      for (const key of Object.keys(fields)) {
        msg = `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}\n`;
        console.log(msg);
        response += msg;
      }

      // Return the concatenated response string
      resolve(response);
    });
  });
};
