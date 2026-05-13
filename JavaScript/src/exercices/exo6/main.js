
let notesTibo = [0, 3, 4, 6, 18, 19, 4]

function calculerMoyenne(notes) {
    let total = 0;
    for (let i = 0; i < 7; i++) {
        total += notes[i];
    }
    return total / 7;
}

console.log(calculerMoyenne(notesTibo));
