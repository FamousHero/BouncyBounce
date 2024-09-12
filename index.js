var sign = -1;

var circles = [];
function main(){

  const elem = document.createElement("div");
  elem.innerHTML = "Hello World!"
  document.body.appendChild(elem);

  const width = 1920;
  const height = 1080;

  setup(width, height);
  

}
/**
 * @param {Number} width
 * @param {Number} height
 */
function setup(width, height) {
  createCanvas(width, height);

  background(247, 196, 10);
  
  const diameter = 100;
  let start_x = 0;

  while(start_x < width){ // I'm p sure this is a sign wave
    // c * Math.sin(x), period
    // Math.sin(x) is bound between [-1, 1], so c = max bound you want 
    // period ~ angle and angle ranges between [0,2*pi]
    //
    // x is degrees in radians
    //
    // period == time == x-axis
    // amplitude == c * Math.sin(x) amplitude == y-axis
    // frequency == time it takes for amplitude to go from [-1, 1]

    circles.push(new Circle(start_x, height/4*Math.sin(start_x/width * 2*Math.PI) + height/2, diameter));
    
    start_x += 20; 

  }

  describe('A project to see circles bounce.');

}
  
function draw(){
  
  background(247, 196, 10);

  circles.forEach((circle)=>{
    check_drop_x(circle);
    check_drop_y(circle);
    circle.draw();

    circle.move();
  })

} 

function check_drop_x(Circle){
  if(Circle.x > width){
    Circle.x = 0;
    //Circle.drop_speed_x -= 2;
  }
  if(Circle.drop_speed_y == 0){
    Circle.drop_speed_x = 0;
  }
}

function check_drop_y(Circle){
  if(Circle.y > height - Circle.drop_speed_y){
    Circle.sign = -1;
    if(Circle.drop_speed_y > 0){
      //Circle.drop_speed_y -= 5;
    }
  }
  else if(Circle.y < Circle.drop_speed_y){
    Circle.sign = 1;
  }

  console.log("X speed is " + Circle.drop_speed_y);
}


class Circle{
    constructor(pos_x, pos_y, diameter){
        this.x = pos_x;
        this.y = pos_y;
        this.d = diameter;
        this.sign = 1;
        let bound = this.y - (.5 * height) ;
        bound = bound / (.25 * height);
        this.current_rad = Math.asin(bound);  // Should be in radians
        console.log(this.current_rad);
        this.drop_speed_x = 10;
        this.drop_speed_y = 0.01745240643;
    }

    /**
     * 
     * @param {Number} pos_x - set x to new position
     * @param {Number} pos_y - set y to new position
     */
    moveTo(pos_x, pos_y, diameter){
        this.x = pos_x;
        this.y = pos_y;

        this.d = diameter;
    }
    /**
     * 
     * @param {Number} offset_x - move x by a give offset
     * @param {Number} offset_y - move y by a give offset 
     */
    move(){
        //this.x += this.drop_speed_x;
        this.y  = .25*height * Math.sin(this.current_rad+ this.drop_speed_y) + .5 * height; // we want y b/w 1/4 * height and 3/4 * height
        // c * sin(x) + b where c is max y and b is offset
        // 
        // for sin(x), we want it to be 10 deg MORE that it was
        // so calculate current deg + 10 deg
        this.drop_speed_y += 0.01745240643;
    }

    /**
     * Create a circle shape to be drawn by p5
     */
    draw(){
        circle(this.x, this.y, this.d);

    }

    
}

// not the best way to run function on load but 
//feels comfortable due to C++ & python experience

// recommend reading MDN docs & https://github.com/FamousHero/Odin-Project-Assignments
document.body.onload = main; // passing pointer to functioN