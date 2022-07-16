const number= prompt("entre la taille de l'array");
function rand10(){
    return Math.floor(Math.random()*11);

}

//crée un array de taille n composé de chiffre random entre 0 et 10
function multiRand(n){
    let array = [];
    for(let i = 0;i<n;i++)
    {
        array.push(rand10());
    }
    return array;
}

console.log(multiRand(number));

