const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ball, ball2;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;

var ground;
var slingShot, slingShot2;
var platForm;

function setup(){
    var canvas = createCanvas(
        400,
        400
    );
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(300, 200, 10, 10);
    ball2 = new Ball(300, 100, 10, 10);
    platForm = new Ground(300, 200, 100, 20)
    ground = new Ground(width / 2, height, width, 20);

    slingShot = new Slingshot(ball.body,{x : 100, y: 300});
    slingShot2 = new Slingshot(ball2.body,{x : 100, y: 100});
    box1 = new Box(300, 300, 50, 50);
    box2 = new Box(300, 250, 40, 40);
    box3 = new Box(300, 235, 30, 30);
    box4 = new Box(300, 200, 20, 20);
    box5 = new Box(300, 100, 20, 20);
    box6 = new Box(300, 50, 10, 300);

}

function draw(){
    background(255);
    ball.display();
    ball2.display();
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    platForm.display();

    slingShot.display();    
    slingShot2.display();    

   
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x : mouseX, y : mouseY});
    Matter.Body.setPosition(ball2.body, {x : mouseX, y : mouseY - 200});
}

function mouseReleased(){
    slingShot.fly();
    slingShot2.fly();
}