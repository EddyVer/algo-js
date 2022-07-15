const numberArray = [1,2,3,4,5];
const numberArray2=[101,102,103];
let i =0;
let x = 0;
for(const y of numberArray)
{
    i+=y;
    
}
i/=numberArray.length;
for(const z of numberArray2)
{
    x+=z;
}
x/=numberArray2.length;
console.log(i,x);