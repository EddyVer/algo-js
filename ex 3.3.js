const numberArray = [1,2,3,4,5];
let copyArray=[];
let copyArray1=numberArray.slice();
for(let i of numberArray)
{
    copyArray.push(i);
}
console.log(copyArray);
console.log(copyArray1);
