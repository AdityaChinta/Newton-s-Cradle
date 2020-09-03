class Bob{
    constructor(x,y,radius){
var options={
    'restitution':1.0,
    'friction': 0,
     'density': 1.2
}
this.body=Bodies.circle(x,y,radius,options);
this.radius=radius;
//this.height=height;
World.add(world,this.body);
    }
    display(){
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      fill("white");
      ellipseMode(RADIUS)
        ellipse(0,0,this.radius);
        pop();
    }
    
}