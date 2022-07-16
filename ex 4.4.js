const liste = ["Anthony","Axel","Daniela","Dorian","Dylan","Eddy","Hazem","Julien.E","Kamilla","Luca","Quentin","Rinaldo","Vincent","Benoit","Guillaume","Julien.S","Sophie","Stéphanie","Sélim","Titouan","Xavier.B","Xavier.C"];
const nbSelect=5;

function pickLearner(inputAr, n){
    let arSelect=[];
    for(let i = 0;i<n;i++)
    {
        let rnd = Math.floor(Math.random()*inputAr.lenght);
        arSelect.push(inputAr[rnd]);
    }
    return arSelect;
}

sconsole.log( pickLearner(liste,nbSelect));
