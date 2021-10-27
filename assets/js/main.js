// js-simon

/*
Descrizione:
    Un alert() espone 5 numeri generati casualmente.
    Da li parte un timer di 30 secondi.
    Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//creo una lista di 5 numeri casuali
const randomList = [];
while (randomList.length < 5) {
    const randomNumber = Math.floor(Math.random() * 100);
    if (!randomList.includes(randomNumber)) {
        randomList.push(randomNumber);
    }
}
// console.log(randomList);

//comunico all'utente i numeri estratti e il regolamento
const timer = 30;
alert(`Ricorda i seguenti ${randomList.length} numeri e riscrivili ${timer} secondi dopo l'OK:

${randomList[0]}
${randomList[1]}
${randomList[2]}
${randomList[3]}
${randomList[4]}
`);

setTimeout(function() {
    const userNumbers = [];

    while (userNumbers.length < randomList.length) {
        const userNumber = prompt('quale numero hai visto?');
        const number = parseInt(userNumber);
       
        if (userNumbers.includes(number)) {
            alert('NUMERO GIà INSERITO !! scrivi un altro numero')
        }
        else if (userNumber === '') {
            alert('VALORE NULLO !! devi inserire un numero')
        }
        else {
            userNumbers.push(number);
        }
    }

    // verifico quanti e quali numeri ha indovinato l'utente
    const correctNumbers = []
    userNumbers.forEach((userNumber) => {
        randomList.forEach((randomNumber) => {
            if ( randomNumber == userNumber) {
                correctNumbers.push(userNumber);
            }
        })
    })
    // console.log(userNumbers);
    // console.log(correctNumbers);

    alert(`numeri indovinati ${correctNumbers.length}/${randomList.length} :
    ${correctNumbers}`);
}, timer * 1000);


//my functions
function whichNumbers (randomList) {
    const userNumbers = [];

    while (userNumbers.length < randomList.length) {
        const userNumber = prompt('quale numero hai visto?');
       
        if (userNumbers.includes(userNumber)) {
            alert('NUMERO GIà INSERITO !! scrivi un altro numero')
        }
        else if (userNumber === '') {
            alert('VALORE NULLO !! devi inserire un numero')
        }
        else {
            const number = parseInt(userNumber);
            userNumbers.push(number);
        }
    }
    console.log(userNumbers);
}


