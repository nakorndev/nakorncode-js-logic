const male = true
const nearby = false
const age = 20
const likeDog = true

if (male && nearby) {
    console.log('match')
} else if (male && age >= 20) {
    console.log('match')
} else if (male && likeDog) {
    console.log('match')
} else {
    console.log('not match')
}
