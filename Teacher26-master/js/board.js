class Board{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        var options ={
            isStatic:true
        };
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("./assets/board.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
        pop();
    }
}