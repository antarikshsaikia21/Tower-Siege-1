class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true,
        restitution :0.4,
        friction :0.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.color = color(random(0,255),random(0,255),random(0,225)); 
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(this.color);
    rect(pos.x, pos.y, this.width, this.height);
  }
};

