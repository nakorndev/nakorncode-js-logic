const age = prompt('What is your age')

if (Number(age) >= 18) {
    alert('Welcome')
} else if (Number(age) >= 15) {
    alert('Welcome (Please come with parent)')
} else {
    alert('Not allow')
}
