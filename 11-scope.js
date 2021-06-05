let accept = confirm('Are you sure to sign-in?')
let username

if (accept) {
    username = prompt('Please input your username')
} else {
    username = 'Anonymous'
}

alert(`Your username is ${username}`)
