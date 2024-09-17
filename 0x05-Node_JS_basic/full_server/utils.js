import fs from 'fs';

function readDatabase(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(Error('Cannot load the database'));
                return;
            }

            const response = {}; // Object to hold arrays of first names per field
            const content = data.toString().split('\n').filter(line => line); // Remove empty lines

            // Skip the header (assuming the first row contains headers)
            for (let i = 1; i < content.length; i++) {
                const student = content[i].split(',');

                const firstname = student[0];
                const field = student[3]; // Assuming the 4th column represents the student's field

                // Initialize the field if it doesn't exist in the response object
                if (!response[field]) {
                    response[field] = [];
                }

                // Add the student's first name to the appropriate field array
                response[field].push(firstname);
            }

            resolve(response); // Resolve the promise with the response object
        });
    });
}
export default readDatabase