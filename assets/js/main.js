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
console.log(randomList);