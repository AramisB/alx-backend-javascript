// Return a Promise using this prototype: function getResponseFromAPI()
export default function getResponseFromAPI() {
  return Promise.resolve({
    status: 200,
    body: 'Success',
  });
}
