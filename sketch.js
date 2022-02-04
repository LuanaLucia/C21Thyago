const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine, box2, solo1;

function setup() {
    createCanvas(400,400)

    engine = Engine.create();
    world = engine.world;

    var options2 = {
        restitution: 1,
        isStatic: false
    }

    
    box2 = Bodies.circle(200,100,25,options2)
    World.add(world,box2)

    solo1 = new solo(200,380,400,10)

  
}

function draw() 
{
    background(100)
    Engine.update(engine);

    solo1.show()

    ellipseMode(CENTER)
    ellipse(box2.position.x,box2.position.y,50)
  
}

