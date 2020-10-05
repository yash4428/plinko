class Plinko {
    constructor(x, y) {
      var options ={
          isStatic:true,
          'restitution':0.3,
          'friction': 0.5,
          'density':1.2
      };
      this.radius = 10;
      this.body = Bodies.circle(x, y, this.radius, options);
      

      World.add(world, this.body);

      



    }
     
   
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("green");
      fill(255);
     ellipse(0,0,this.radius,this.radius);
      pop();
    }
  };
  
    