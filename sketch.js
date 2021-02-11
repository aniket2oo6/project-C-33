const Engine = Matter.Engine,
 const World = Matter.World,
 const Events = Matter.Events,
 const Bodies = Matter.Bodies;
 
var particles = [];;
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,760,800,40);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionheight/2, 5, divisionheight));
   }


    for (var l = 75; l <=width; l=l+50) 
    {
    
       plinkos.push(new Plinko(l,75,30));
    }

    for (var m = 50; m <=width-10; m=m+50) 
    {
    
       plinkos.push(new Plinko(m,175,30));
    }

     for (var n = 75; n <=width; n=n+50) 
    {
    
       plinkos.push(new Plinko(n,275,30));
    }

     for (var o = 50; o <=width-10; o=o+50) 
    {
    
       plinkos.push(new Plinko(n,375,30));
    }

   
Engine.run(engine);
    
}
 


function draw() {
  background("black");
  Engine.update(engine);
 
  ground.display();

   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-10,width/2+10), 10,10));
   }

   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

   drawSprites();
   
}