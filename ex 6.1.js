class circle{
    constructor(xPos,yPos,radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffSet,yOffSet){
        this.xPos = xOffSet;
        this.yPos = yOffSet;
    }
    get surface(){
        return this.radius * this.radius * Math.PI;
    }
}
let leCercle = new circle(5,3,2);
leCercle.move(2,1);
console.log(leCercle.xPos, leCercle.yPos, leCercle.surface);

