class Umbrella{
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.image = loadImage("../images/Walking-Frame/walking_1.png");
        this.body = Bodies.circle(x, y, 100, options);
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
    }
}