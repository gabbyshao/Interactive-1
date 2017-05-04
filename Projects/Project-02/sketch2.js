// noise (Perlin noise) - floating
// mouth on hover detect - dist function

var x = 0.0;
var y = 0.0;
var value = 0;
var song;

function setup() {
	createCanvas(1250,680);
	stroke(255);
	noFill();
	strokeWeight(4.5);
}

function draw() {

	background(0, 0, 0, 0.1);
  x = x + .01;
  var n = noise(x) * width;

	y = y + .01;
  var n = noise(y) * height;

	x = 670;
	y = 260;

	chinandhead();

// NOTE: left&Right ear
bezier(x-60, y-40, x-90, y-60, x-90, y+10, x-50, y+5);
bezier(x+80, y-40, 780, y-60, 780, 270, 740, 265);
bezier(x-70, y-25, x-70, y-20, x-70, y-15, x-60, y-10);
bezier(x+90, y-25, x+95, y-25, x+95, y-15, x+85, y-10);

// NOTE: left&right eye brow 左边条眉毛y－50的 本来是215
bezier(x-30, y-42, x-30, y-45, x-15, y-50, x-15, y-42);
bezier(x+30, y-42, x+30, y-45, x+50, y-45, x+45, y-41);

// NOTE: nose

bezier(x, y, x+8, y+5, x+13, y+5, x+20, y);

// NOTE: Hover Mouse

// NOTE: mouse
bezier(x, y+30, x+8, y+30, x+13, y+30, x+20, y+30);



// NOTE: left&right eyes
bezier(x-26, y-30, x-23, y-20, x-23, y-20, x-21, y-30);
bezier(x+34, y-30, x+37, y-20, x+37, y-20, x+39, y-30);

// NOTE: left&right shoulder
bezier(x-22, y+60, x-100, y+120, x-100, y+130, x-100, y+310);
bezier(x+44, y+60, x+122, y+120, x+122, y+130, x+122, y+310);

// NOTE: left&right arms
bezier(x-60, y+290, x-60, y+170, x-60, y+170, x-60, y+290);
bezier(x+80, y+290, x+80, y+170, x+80, y+170, x+80, y+290);

// NOTE:
bezier(x-70, y+300, x-70, y+240, x-70, y+240, x-70, y+300);
bezier(x+90, y+270, x+90, y+240, x+90, y+240, x+90, y+300);

  /*
  try uncommenting the background function in the draw()
  and see how your sketch changes
  */

  //background(0,0,255);

//bouncesimple//

}

function chinandhead(){
bezier(x-53, y-5, x-35, y+93, x+50, y+105, x+73, y-5);
bezier(x-58, y-40, x-60, y-150, x+80, y-150, x+78, 220);}

function mousePressed() {
	if (value ==0){
		bezier(x, y+30, x+8, y+30, x+13, y+30, x+20, y+30);
		clear();
		value = 255;
	}else{
		bezier(x, y+30, x+8, y+50, x+13, y+50, x+20, y+30);
		bezier(x, y+30, x+8, y+50, x+13, y+50, x+20, y+30)
		value =0;
	}

	function setup() {
	  song = loadSound('playful-music.mp3');
	  createCanvas(720, 200);
	  background(255,0,0);
	}

	function mousePressed() {
	  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
	    song.stop();
	    background(255,0,0);
	  } else {
	    song.play();
	    background(0,255,0);
	  }
	}

console.log(value);
}
