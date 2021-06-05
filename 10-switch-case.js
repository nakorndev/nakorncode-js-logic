// status 1 = success
// status 2 = waiting
// status 3 = cancel
// status ? = error

const status = 116

// if (status == 1) {
//     console.log('success')
// } else if (status == 2) {
//     console.log('waiting')
// } else if (status == 3) {
//     console.log('cancel')
// } else {
//     console.log('error')
// }

switch (status) {
    case 1:
    case 11:
    case 115:
        console.log('success')
        break
    case 2:
        console.log('waiting')
        break
    case 3:
        console.log('cancel')
        break
    default:
        console.log('error')
        break
}
