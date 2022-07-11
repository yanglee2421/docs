"use strict"
const arr = [0, 1, 2, 3, 4]
const res = arr.reduce((prev, current) => {
    return prev ? prev + current : current
})
console.log(res)
