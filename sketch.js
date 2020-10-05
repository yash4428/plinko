const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world= engine.world
 
  
  ground = new Ground(600,height,1200,20);
  division = new Divisions(10,790,30,500)
  division1 = new Divisions(102,790,30,500)
  division2 = new Divisions(194,790,30,500)
  division3 = new Divisions(286,790,30,500)
  division4 = new Divisions(378,790,30,500)
  division5 = new Divisions(470,790,30,500)
 
  for(var k = 40; k <=width;  k=k+50){
    plinkos.push(new Plinko(k,75));
  }
  for(var k = 40; k <=width;  k=k+50){
    plinkos.push(new Plinko(k,175));
  }
  for(var k = 40; k <=width;  k=k+50){
    plinkos.push(new Plinko(k,275));
  }
  for(var k = 40; k <=width;  k=k+50){
    plinkos.push(new Plinko(k,375));
  }

}

function draw() {
  Engine.update(engine);
  background("black");  
  ground.display();
  division.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  
   }

   for(var j =0; j<particles.length;j++){
    particles[j].display();
   }
   for(var k =0; k<plinkos.length;k++){
    plinkos[k].display();
   }
   

  
  
  drawSprites();
  
}


