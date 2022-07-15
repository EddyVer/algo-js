let number = prompt("enter a number");
let start = Number(number);
let loop= start;
for(let i =0; i <= loop;i+=1)
 {
    number = prompt("enter a number");
    let start2 = Number(number);
    start+=start2;
    start2=0;
 }
console.log(start);