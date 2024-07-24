//Return a Promise using this prototype: function getResponseFromAPI()
export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Success!');
        }, 1000);
    });
}
