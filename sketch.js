var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	 createCanvas(400,700);
	//rectMode(CENTER);
    dropbox=createSprite(200,654,110,10)
dropbox2=createSprite(150,600,10,110)
dropbox2=createSprite(250,600,10,110)

packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=1

	groundSprite=createSprite(width/2, height-35, width,10,);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	
	var render = Matter.Render.create({ element:document.body, engine: engine, options:
		 { width: 400, height: 700,  showAngleIndicator: true, wireframes:false, }, }); Matter.Render.run(render);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 dropBox1 = Bodies.rectangle(200, 650, 110, 10 , {isStatic:true} );
 	World.add(world,dropBox1 );
	 dropBox2= Bodies.rectangle(150, 600, 10, 110 , {isStatic:true} );
 	World.add(world, dropBox2);
	 dropBox3= Bodies.rectangle(250, 600, 10, 110 , {isStatic:true} );
 	World.add(world, dropBox3);
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  preload();
 //if(keyPressed (DOWN_ARROW) ){
	keyPressed();

 }


function keyPressed() {
 if (keyCode == DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
	//Matter.Body.setStatic(dropbox,false);
 }  
} 




