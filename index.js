// I AM NOT A P5 PROGRAMMER, I WILL NOT CONFORM!!!!!!!!!!!

// JS fucking suckssssssssssssss.
// I have to make global variable for p5

let drop_x = 100;
let drop_y = 100;
let sign = -1;
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
  circleBuilder(width/2, height/2, diameter);

  describe('A white circle with black outline in the middle of a gray canvas.');
}
  
function draw(){
  
  background(247, 196, 10);

  check_drop_x();
  check_drop_y();
  
  circle(drop_x, drop_y, 50);
 
  drop_x += 10;
  drop_y += 100 * sign;
} 

function check_drop_x(){
if(drop_x > width){
    drop_x = 0;
  }
}

function check_drop_y(){
  if(drop_y > height){
    sign = -1;
  }
  else if(drop_y < 0){
    sign = 1;
  }

}
/**
 * @param {Number} pos_x
 * @param {Number} pos_y
 * @param {Number} radius
 */
function circleBuilder(pos_x, pos_y, diameter){
  circle(pos_x, pos_y, diameter);
}
// not the best way to run function on load but 
//feels comfortable due to C++ & python experience

// recommend reading MDN docs & https://github.com/FamousHero/Odin-Project-Assignments
document.body.onload = main; // passing pointer to functioN