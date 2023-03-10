let array = [-3, 35, 0, 56, 12, 65, 89];
let arr = [0];
function smallNumber(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < arr[0]) {
            arr[0] = array[i];
        }
    }
    return arr;
}
console.log(smallNumber(array));
document.write('The Smallst Number:' + arr);