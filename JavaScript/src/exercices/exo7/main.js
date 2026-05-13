
let notesTibo = [0, 3, 4, 6, 18, 19, 4]

function calculerMoyenne(notes) {
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
        somme += notes[i];
    }
    let moyenne = somme / notes.length;
    if (moyenne >= 15) {
        return "Très bien"
    } 
    else if (moyenne >= 10) {
        return "Assez bien"
    } 
    else {return "Refus"}
}

console.log(calculerMoyenne(notesTibo));

