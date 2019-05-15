// function printAllPossibleOrderedPairs(items) {
//     items.forEach(firstItem => {
//         items.forEach(secondItem => {
//             console.log(firstItem, secondItem);
//         });
//     });
// }

// function sayHiNTimes(n) {
//     for (let i = 0; i < n; i++) {
//         console.log('hi');
//     }
// }

function printAllNumbersThenAllPairSums(numbers) {
    numbers.forEach(num => {
        console.log(num)
    })

    numbers.forEach(firstNum => {
        numbers.forEach(secNum => {
            console.log(firstNum + secNum)
        })
    })



}


items = [1, 2, 3, 4, 5, 6, 7]

// printAllPossibleOrderedPairs(items)
// sayHiNTimes(5)
printAllNumbersThenAllPairSums(items)

