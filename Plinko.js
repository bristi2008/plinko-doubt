class Plinko{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
        this.body = Bodies.circle(x,y,r,options)
        this.r = r
    }
    
    display(){

        var pos = this.body.position;
        ellipseMode(RADIUS)
        fill("white")
        ellipse(pos.x,pos.y,this.r);

    }
}