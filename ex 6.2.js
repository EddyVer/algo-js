class rectangle{
    constructor(topLeftXPos, topLeftYPos, width , Length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.Length =Length;
    }
    collides(otherRectangle){
        const left = this.topLeftXPos;
        const up = this.topLeftYPos;
        const down = this.topLeftYPos - this.Length;
        const right = this.topLeftXPos + this.width;

        const otherLeft = otherRectangle.topLeftXPos ;
        const otherUp = otherRectangle.topLeftYPos;
        const otherRight = otherRectangle.topLeftXPos + otherRectangle.width ;
        const otherDown = otherRectangle.topLeftYPos - otherRectangle.Length ;
        
        if((otherUp >= down && otherUp <= up) || (otherDown >= down && otherDown <= up))
        {
            if((otherRight >= left && otherRight <= right)||(otherRight >= left && otherLeft <= right))
            {
            return true;
            }
        }
        return false;
    }
}

const rect1 = new rectangle( 1, 2, 1, 3);
const rect2 =new rectangle( 2, 5, 4, 5);
console.log(rect1.collides(rect2));