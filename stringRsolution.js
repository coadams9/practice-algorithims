const arr = ['a', 'b', 'c', 'd', 'e', 'f']


function reverse(arr) {

    let leftindex = 0
    let rightindex = arr.length - 1

    while (leftindex < rightindex) {

        let temp = arr[leftindex]
        arr[leftindex] = arr[rightindex]
        arr[rightindex] = temp

        leftindex++
        rightindex--
    }
}

reverse(arr)