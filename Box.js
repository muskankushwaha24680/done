class Box{

    constructor(x,y,width,height){

        var options={
           
            restitution: 0.8,
            friction: 1,
            //density: 1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.Visiblity = 255;
    }

    

display(){
    console.log(this.body.speed);
    if(this.body.speed < 2){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
      translate(this.body.position.x,this.body.position.y);
      rotate(angle);
      rectMode(CENTER)
      fill("pink");
      rect(0,0,this.width,this.height)
      pop();
         }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      pop();
    }
   }
}
