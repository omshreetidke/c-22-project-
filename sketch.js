
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var leftSide,rightSide;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
		
		}

	ball = Bodies.circle(50,500,15,ball_options);
	World.add(world,ball);
	
	groundObj= new Ground(width/2,670,width,20)
	leftSide = new Ground(500,600,20,120)
	rightSide = new Ground(700,600,20,120)
	
	ellipseMode(RADIUS);
	rectMode(CENTER);
}


function draw() {
  
  background(0);

  groundObj.show();
  leftSide.show();
  rightSide.show();
  ellipse(ball.position.x,ball.position.y,15)
  
  Engine.run(engine);
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:23,y:-20})
	}
	
}



