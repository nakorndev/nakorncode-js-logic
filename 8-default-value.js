console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(-1))
console.log(Boolean(''))
console.log(Boolean(' '))
console.log(Boolean('blue'))

let color = prompt('Please input color (optional)') || 'red'

// if (!color) {
//     color = 'red'
// }

alert(`Your team color is ${color}`)
