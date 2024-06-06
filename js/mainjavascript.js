// creazione costante per la selezione di un elemento in dom

const contenitorePrincipaleNelMain = document.querySelector(".container");

// applico il ciclo per stampare in console i numeri da 1 a 100

for (let i = 1; i <=100; i++) {

    // utilizzo console log per verifica stamp numeri da 1 a 100
    console.log(i);

    // inserisco nel dom lo stamp dei numeri da 1 a 0 inserendoli in piu elementi div

    const element = `<div class="quadrato ${i}">${i}</div>`;
    contenitorePrincipaleNelMain.innerHTML += element;




}

