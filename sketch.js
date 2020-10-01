
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,40,300,20)
	bob1=new Bob(300,300,50)
	bob2=new Bob(350,300,50)
	bob3=new Bob(400,300,50)
	bob4=new Bob(450,300,50)
	bob5=new Bob(500,300,50)
	line1=new Ropes(bob1.body,roof.body,-100,0)
	line2=new Ropes(bob2.body,roof.body,-50,0)
	line3=new Ropes(bob3.body,roof.body,0,0)
	line4=new Ropes(bob4.body,roof.body,50,0)
	line5=new Ropes(bob5.body,roof.body,100,0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 roof.SomethingWasHere()
 bob1.display()
 bob2.display()
 bob3.display()
 bob4.display()
 bob5.display()
 line1.display()
 line2.display()
 line3.display()
 line4.display()
 line5.display()
}
function keyPressed(){
	if(keyCode==32){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:0})
	}
}



