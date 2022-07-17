//retourne la distance entre le coordonnée x et y 
function calcDistance(x1,x2, y1, y2){
    let y = x2 - x1;
    let x = y2 - y1; 
    return Math.sqrt(x * x + y * y); 
}
console.log(calcDistance(5, 2, 7, 3));
