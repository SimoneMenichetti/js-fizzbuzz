// creazione costante per la selezione di un elemento in dom

const contenitorePrincipaleNelMain = document.querySelector(".container");

// applico il ciclo per stampare in console i numeri da 1 a 100

for (let i = 1; i <=100; i++) {

    // utilizzo console log per verifica stamp numeri da 1 a 100
    console.log(i);

    // inserisco nel dom lo stamp dei numeri da 1 a 0 inserendoli in piu elementi div

    const element = `<div class="quadrato ${i}">${i}</div>`;
    contenitorePrincipaleNelMain.innerHTML += element;
    
// utilizzando un ciclo con for se è un multiplo di 3 sarà "Fiz" di 5 sarà "Buzz" o di entrambi 3-5 "FizBuzz"

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

}

