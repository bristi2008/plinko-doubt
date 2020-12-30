class Particle{
    constructor(x,y,r,color){
        var options={
            restititution:0.5,
            density:0.2,
            friction:0.3
        }
        this.r = r
        this.body = Bodies.circle(x,y,this.r,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.r,this.color);
 
    }
}