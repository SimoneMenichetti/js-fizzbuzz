// creazione costante per la selezione di un elemento in dom

const contenitorePrincipaleNelMain = document.querySelector(".container");

// applico il ciclo per stampare in console i numeri da 1 a 100

for (let i = 1; i <=100; i++) {

    // utilizzo console log per verifica stamp numeri da 1 a 100
    console.log(i);
    // utilizzando un ciclo con for se è un multiplo di 3 sarà "Fiz" di 5 sarà "Buzz" o di entrambi 3-5 "FizBuzz"

    if (i % 3 === 0 && i % 5 === 0) {
        output = "FizzBuzz";

    } else if (i % 3 === 0) {
        output = "Fizz";

    } else if (i % 5 === 0) {
        output = "Buzz";

    } else {
        output = i;
    }

    // creiamo un nuovo elemento div
    const div = document.createElement('div');

    // abilitare il testo ed aggiungere classi

        // per il testo
    div.textContent = output;
        // aggiunta classe
    div.classList.add("quadrato", output);

    // appendiere l'elemento al contenitore principale utilizzando append()
    contenitorePrincipaleNelMain.append(div);
  
}
