let day = prompt("enter a number");
let numberDay = Number (day);
let returnDay= "";
switch(day)
{
    case 1: returnDay=" monday ";break;
    case 2:returnDay=" tuesday ";break;
    case 3:returnDay=" wednesday";break;
    case 4:returnDay=" thursday ";break;
    case 5: returnDay="friday" ; break;
    case 6: returnDay="saturday";break;
    case 7:returnDay="sunday";break;
}
console.log(returnDay);