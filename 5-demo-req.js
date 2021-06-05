// age 18 - 30
// speak thai or english
// not student

const age = 20
const speak = 'thai'
const student = false

// age >= 18 && age <= 30
// speak == 'thai' || speak == 'english'
// !student

if (
    (age >= 18 && age <= 30) &&
    (speak == 'thai' || speak == 'english') &&
    (!student)
) {
    console.log('Yes')
} else {
    console.log('No')
}
