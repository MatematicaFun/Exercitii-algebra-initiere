let x;
let a;
let b;

function genereaza() {
    x = Math.floor(Math.random() * 10) + 1;
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 20) + 1;

    let rezultat = a * x + b;

    document.getElementById("ecuatie").innerText =
        `${a}x + ${b} = ${rezultat}`;

    document.getElementById("rezultat").innerText = "";
    document.getElementById("raspuns").value = "";
}

function verifica() {
    let raspuns = parseInt(document.getElementById("raspuns").value);

    if (raspuns === x) {
        document.getElementById("rezultat").innerText =
            "Corect!";
    } else {
        document.getElementById("rezultat").innerText =
            `Greșit! x = ${x}`;
    }
}

genereaza();