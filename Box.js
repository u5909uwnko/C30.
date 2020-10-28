class Box{
    constructor(x, y, width, height) {
        var options = {
          restitution:0.8,
          friction:1.0
           
        }
  
        this.body = Bodies.rectangle(x, y, width/2, height/2, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255
        World.add(world, this.body);
      }
      display(){
        if (this.body.speed < 10){
  
      
        var angle = this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        fill(226, 234, 238)
        rectMode(CENTER)
        rect(0,0,this.width/2,this.height/2)
        pop();
      }
      else {
        World.remove (world, this.body)
        this.Visibility = this.Visibility - 5
         
      }
  
        //console.log (this.body.speed);
     
      }
      score(){
        if(this.Visibility<0 ){
            score++;
        }
      }
  }