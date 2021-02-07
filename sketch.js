const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boi;
var drops = [];
var maxDrops = 100;
var rlthunder, thunderimg1, thunderimg2, thunderimg3, thunderimg4;

function preload(){
    thunderimg1 = loadImage("../images/thunderbolt/1.png");
    thunderimg2 = loadImage("../images/thunderbolt/2.png");
    thunderimg3 = loadImage("../images/thunderbolt/3.png");
    thunderimg4 = loadImage("../images/thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(400, 800);
    engine = Engine.create();
    world = engine.world;

    rlthunder = createSprite(200, 200);

    boi = new Umbrella(200, 750);
    for (var i = 0; i<maxDrops; i++) {
        drops.push(new Drops(random(0, 400), random(0, 400)));
    }
}

function draw(){
    background(0);
    Engine.update(engine);
    boi.display();
    for (let i = 0; i < drops.length; i++) {
        drops[i].display();
    }
    if (drops.body.position.y >= height) {
        Matter.Body.setPosition(random(0, 400), random(0, 400));
    }
    var rng = Math.round(random(1, 4));
    switch (rng) {
        case 1:rlthunder.addImage("getspooped", thunderimg1);
        break;
        case 2:rlthunder.addImage("getspooped", thunderimg2);
        break;
        case 3:rlthunder.addImage("getspooped", thunderimg3);
        break;
        case 4:rlthunder.addImage("getspooped", thunderimg4);
        break;
        default:break;
    }
}   