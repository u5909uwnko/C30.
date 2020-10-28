const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var polygon;
var score = 0;
var sling;
var stone1;

function setup() {
  createCanvas(1500,800);
  engine = Engine.create();
  world = engine.world;

  platform1 = new Ground(500,650,350,10)
  platform2 = new Ground(1000,400,350,10)
  ground = new Ground(700,height,2000,20)

 // PLATFORM 1:

  // stack 1, level 1
  stone1 = new BoxB(200,530,80,80)
  box1 = new Box(430,630,100,120)
  box2 = new Box(490,630,100,120)
  box3 = new Box(550,630,100,120)
  box4 = new Box(610,630,100,120)
  box5 = new Box(370,630,100,120)
 fill(255,157,243)
 //stack1, level 2
  box6 = new Box(515,550,100,120)
  box7 = new Box(580,550,100,120)
  box8 = new Box(450,550,100,120)
  box9 = new Box(390,550,100,120)
  //stack1, level 3
  box10 = new Box(430,460,100,120)
  box11 = new Box(490,460,100,120)
  box12 = new Box(540,460,100,120)
  // stack1, top level
  box13 = new Box(490,390,100,120)

  //PLATFORM 2:

//stack 2, level 1
box14 = new Box(990,380,100,120)
box15 = new Box(935,380,100,120)
box16 = new Box(890,380,100,120)
box17= new Box(1040,380,100,120)
box18 = new Box(1090,380,100,120)
fill(255,157,243)
//stack 2, level 2
box19 = new Box(965,300,100,120)
box20 = new Box(1015,300,100,120)
box21= new Box(915,300,100,120)
box22 = new Box(1065,300,100,120)
//stack 2, level 3
box23 = new Box(1045,240,100,120)
box24 = new Box(1005,240,100,120)
box25 = new Box(960,240,100,120)
//stack 2, top level
box26 = new Box(1000,100,100,120)

sling = new SlingShot(stone1.body,{x: 200,y: 550})

}

Engine.run(engine)

function draw() {
  background("grey");  
  text("SCORE :" + score, 650, 40);

  Engine.update(engine)
 

  platform1.display();
  platform2.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score ();
  box3.display();
  box3.score();
  box4.display();
  box4.score ();
  box5.display();
  box5.score ();
  box6.display();
  box6.score ();
  box7.display();
  box7.score ();
  box8.display();
  box8.score ();
  box9.display();
  box9.score ();
  box10.display();
  box10.score ();
  box11.display();
  box11.score ();
  box12.display();
  box12.score ();
  box13.display();
  box13.score ();
  box14.display();
  box14.score ();
  box15.display();
  box15.score ();
  box16.display();
  box16.score ();
  box17.display();
  box17.score ();
  box18.display();
  box18.score ();
  box19.display();
  box19.score ();
  box20.display();
  box20.score ();
  box21.display();
  box21.score ();
  box22.display();
  box22.score ();
  box23.display();
  box23.score ();
  box24.display();
  box24.score ();
  box25.display();
  box25.score ();
  box26.display();
  box26.score ();
  stone1.display();
  ground.display();
  sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed (){
  if (keyCode === 32){
    sling.attach (stone1.body); 
    console.log ("")
  }
}