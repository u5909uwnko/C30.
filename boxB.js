class BoxB{
    constructor(x, y, width, height) {
        var options = {
          restitution:0.8,
            friction:0.8,
             density: 0.01
        }
        this.body = Bodies.rectangle(x, y, width/2, height/2, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygonIMG.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        
       imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop();
      }
}