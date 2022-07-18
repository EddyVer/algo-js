function askTvSerie(){

    let result={
        nameSerie :prompt("Waht is your favorite serie ?"),
        yearProd : prompt("what is the production years ?"),
        cast : []
    }
    let exit = false;
    
    while(exit!==true)
    {
        let input=prompt("Cast of the serie ?");
  
        exit = input.length !== 0;
        
        if(exit == true)
        {
            result.cast.push(input);
        }
    }
    return result;
}

function randomizeCast(tvSerie){
    let Cast = tvSerie.cast;
    
    for(let i = 0;i < Cast.length; i++)
    {
        let rnd = Math.floor(Math.random() * Cast.length);
        let tmpCast = Cast[i];
        Cast[i] = Cast[rnd];
        Cast[rnd] = tmpCast;
    }
    return Cast;
}    

console.log(randomizeCast(askTvSerie()));