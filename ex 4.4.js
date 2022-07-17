const liste = ["Anthony","Axel","Daniela","Dorian","Dylan","Eddy","Hazem","Julien.E","Kamilla","Luca","Quentin","Rinaldo","Vincent","Benoit","Guillaume","Julien.S","Sophie","Stéphanie","Sélim","Titouan","Xavier.B","Xavier.C"];


function pickLearner(inputAr, n){
    if(n < 0 || n >= inputAr.length) {
        console.error("");
        return [];
      }
    let arSelect=[];
    for(let i = 0;i<n;i++)
    {
        let rnd = Math.floor(Math.random() * inputAr.length);
        arSelect.push(inputAr[rnd]);
    }
    return arSelect;
}
console.log( pickLearner(liste,5));
