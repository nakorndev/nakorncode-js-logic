// && and
// || or
// !  not

const p = [true, true, false, false]
const q = [true, false, true, false]

console.log('true && true', p[0] && q[0])
console.log('true && false', p[1] && q[1])
console.log('false && true', p[2] && q[2])
console.log('false && false', p[3] && q[3])

console.log('true || true', p[0] || q[0])
console.log('true || false', p[1] || q[1])
console.log('false || true', p[2] || q[2])
console.log('false || false', p[3] || q[3])

console.log('!true', !q[0])
console.log('!false', !q[1])
