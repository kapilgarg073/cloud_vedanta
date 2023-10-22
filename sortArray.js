function sortDescending(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
               
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const numbers = [5, 2, 9, 1, 5, 6];

sortDescending(numbers);

console.log(numbers); // [9, 6, 5, 5, 2, 1]
