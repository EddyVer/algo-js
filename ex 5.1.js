function askTvSerie(){

    let result={
        nameSerie :prompt("Waht is your favorite serie ?"),
        yearProd : prompt("what is the production years ?"),
        cast : []
    }
    let exit = false;
    
    while(exit!==true)
    {
        for(let i = 0;i < 5; i++){
            let input = prompt("cast of the serie?");
            }
        exit = input.length !== 0;
        
        if(exit == true)
        {
            result.cast.push(input);
        }
    }
    return result;
}
console.log(JSON.stringify(askTvSerie()));