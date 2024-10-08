// In this file, import uploadPhoto and createUser from utils.js

// Knowing that the functions in utils.js return promises,
// use the prototype below to collectively resolve all promises
// and log body firstName lastName to the console.

// function handleProfileSignup()
// In the event of an error, log Signup system offline to the console

import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise.all([
    uploadPhoto(),
    createUser(),
  ])
    .then((results) => {
      const photo = results[0];
      const user = results[1];
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    }).catch(() => {
      console.log('Signup system offline');
    });
}
