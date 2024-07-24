// Import uploadPhoto and createUser from utils.js

// Write an async function named asyncUploadUser
// that will call these two functions and return an object with the following format:

// {
//   photo: response_from_uploadPhoto_function,
//   user: response_from_createUser_function,
// }
// If one of the async function fails, return an empty object.

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}
