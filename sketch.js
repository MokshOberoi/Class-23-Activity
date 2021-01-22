//Namespacing
const Engine = Matter.Engine ;
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Render = Matter.Render; 

var myEngine, myWorld, ground ;
var box1 , box2;
var ground ;

function setup() {
  createCanvas(400,400);
  
  //Create engine and world
  myEngine = Engine.create (); 
  myWorld = myEngine.world ;

  var render = Render.create({
	  element: document.body,
	  engine: myEngine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
  });
  


  box1 =  new Box (100,100,50,100);
  box2 = new Box (115,0,50,100);


  ground = new Ground (200,370,400,30);

  
  Render.run (render);

}

function draw() {
  //Display the objects
  background("blue");  
  Engine.update (myEngine);

  box1.display ();
  ground.display();
  box2.display();
  //drawSprites();

}