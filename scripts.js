/*

Math --> Matemática

- pow -> power -> potência / pow(2,2) = 2² = 4;
- sqrt -> quadrada -> raiz quadrada / sqrt(25,2) = √25 = 5;
- PI -> 3,141618;
- ceil -> teto / arredondar para cima;
- floor -> chão -> arredondar para baixo;
- random () -> aleatório / número aleatório entre 0 e 1 

const result3 = Math.ceil(3.141618)
console.log(result3) // 4 entrega o valor arredondado para cima

const result4 = Math.floor(3.141618)
console.log(result4) // 3 entrega o valor arredondado para baixo

const result5 = Math.random()
console.log(result5) // 0.7234142177151562 gerou um número aleatório entre 0 e 1

Exemplo usando o random, para achar um número aleatório entre um valor minimo e outro maximo:

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor (Math.random() * (max - min + 1) + min;
}


*/

const buttonRaffle = document.querySelector(".button-raffle")
//const resultNumber = document.querySelector(".result-number")
//console.log(resultNumber)

function numberRaffle() {

    const min = Math.ceil(document.querySelector('.first-number').value); // arredonda pra cima
    const max = Math.floor(document.querySelector('.last-number').value);  // arredonda pra baixo

    if (min >= max) {
        alert("Você digitou um número inválido!")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        alert(result)
    }

}

buttonRaffle.addEventListener('click', numberRaffle)