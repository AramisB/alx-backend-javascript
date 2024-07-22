//Modify the following function to return the number of arguments passed to it using the rest parameter syntax
export default function returnHowManyArguments(...args) {
    let total = 0;

    for (const arg of args) {
        total += 1;
    }
    return total;
}
