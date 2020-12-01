function map(array, callback) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray
}

function reduce(array, callback, start) {
    let r = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1

    for (; i < array.length; i++) {
        r = callback(array[i], r)
    }
    return r
}