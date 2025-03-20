let str = 'SCRIMBA'

function reverseStr(str) {
    if (str.length === 0) {
        return str
    } else {
        return reverseStr(str.slice(1)) + str.slice(0, 1)
    }
/*
Challenge:
    1. Write logic for a recursive function 
       that reverses a string.
    🛟 hint.md for help!
*/
}

console.log(reverseStr(str))

// str.slice(start, end)

// What is the base case? The strings length being zero.
// SCRIMBA
// CRIMBA
// RIMBA
// IMBA
// MBA
// BA
// A
// ""
// A
// AB
// ABM
// ABMI
// ABMIR
// ABMIRC
// ABMIRCS