console.log('canvas crash course');

const canvas = document.getElementById('my-canvas');
console.log(canvas);

// what you actually draw on is called a "Rendering context"
// you don't really need to understand it, just include this line of code
// it is almost always abbr'd "ctx"
const ctx = canvas.getContext('2d');
console.log(ctx);


// square that draws itself
const captSquare = {
  x: 502,
  y: 52,
  width: 46,
  height: 46,
  color: "orange",
  speed: 3,
  direction: {
    up: false,
    down: false,
    left: false,
    right: false
  },
  draw() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height)
    ctx.fillStyle = this.color;
    ctx.fill();
  }, 
  move() {
    if(this.direction.up) this.y -= this.speed;
    if(this.direction.left) this.x -= this.speed;
    if(this.direction.right) this.x += this.speed;
    if(this.direction.down) this.y += this.speed;
  },
  setDirection(key) {
    if(key == 'w') this.direction.up = true;
    if(key == 'a') this.direction.left = true;
    if(key == 's') this.direction.down = true;
    if(key == 'd') this.direction.right = true;
    // console.log(this.direction)
  },
  unsetDirection(key) {
    if(key == 'w') this.direction.up = false;
    if(key == 'a') this.direction.left = false;
    if(key == 's') this.direction.down = false;
    if(key == 'd') this.direction.right = false;
    // console.log(this.direction)
  },
  checkCollision(thing) { // note this is designed to check for coll w/ other RECTs specifically
    if(
      this.x + this.width > thing.x &&
      this.x < thing.x + thing.width && 
      this.y + this.height > thing.y &&
      this.y < thing.y + thing.height
    ) {
      console.log('collision');
      return true
    }  
    else return false
  }
}
captSquare.draw();


const cmdrCircle = {
  x: 200,
  y: 40,
  r: 17,
  speed: 10,
  color: "cadetblue",
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    ctx.fillStyle = this.color
    ctx.fill();
  },
  move(key) {
    console.log("you are pressing", key);
    if(key == "ArrowDown" && this.y + this.r + this.speed < canvas.height) {
      this.y += this.speed;
    }
    if(key == "ArrowUp" && this.y - this.r - this.speed > 0) {
      this.y -= this.speed;
    }
    if(key == "ArrowLeft" && this.x - this.r - this.speed > 0) {
      this.x -= this.speed;
    }
    if(key == "ArrowRight" && this.x + this.r + this.speed < canvas.width) {
      this.x += this.speed;
    }
    clearCanvas(); // this will get rid of trailers
    this.draw();
  }
}
cmdrCircle.draw();


const obstacle = {
  x: 250, 
  y: 250,
  width: 100,
  height: 100,
  color: "black",
  draw() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height)
    ctx.fillStyle = "black";
    ctx.fill();
  }
}
obstacle.draw();

function makeX() {
  // draw a line

  // "hey i'm about to set up a new line"
  ctx.beginPath()

  // "start the line here"
  ctx.moveTo(100, 100) // these are x, y coords from the top left (x first param)

  // "the line should end here"
  ctx.lineTo(300, 300)

  // you can style the stroke if you want -- default 1px black (i think)
  // color--any valid CSS color value will work here
  ctx.strokeStyle = "blue"
  // you can set width
  ctx.lineWidth = 6
  // note these values will "stick" until you change them

  // "actually draw the line" -- note without this there is no line
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(300, 100)
  ctx.lineTo(100, 300)
  ctx.stroke();  
}
// makeX();


// make a func called drawGrid() that draws a grid of 1px black lines with 49px between them
// so every 50 px there should be a horiz or vert line in each direction
// hint: use for loops -- 2 loops

function makeGrid() {
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1;

  // draw vertical lines
  for(let i = 0; i < canvas.width; i += 50) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke()
  }
  // draw horizontal lines
  for(let i = 0; i < canvas.height; i += 50) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
  }
}

function makeRectangles() {
  // drawing rect(angle)s is v similar to drawing lines

  // same as always...
  ctx.beginPath()

  // the method for drawing rects (of any size) takes 4 arguments
  // here they are in order
  // 1. x coord of the UPPER LEFT HAND CORNER of the rectangle you wanna draw
  // 2. y coord of the UPPER LEFT HAND CORNER of the rectangle you wanna draw
  // 3. width of rect u wanna draw
  // 4. height of the rect u wanna draw
  ctx.rect(300, 300, 80, 180);

  // set styles (optional)
  ctx.strokeStyle = "maroon"
  ctx.lineWidth = 4

  // actually draw 
  ctx.stroke();


  // what if you want a filled in rect?
  // pretty similar process....
  ctx.beginPath();
  ctx.rect(70, 200, 280, 80);

  // here's how you set the color that the rect will be filled with
  ctx.fillStyle = "green"

  // actually draw a filled in rectangle
  // use this instead of stroke if u want your rectangle filled in
  ctx.fill()
  
}

// here's how you make circles
function makeCircles() {

  // for circles use the ctx.arc() method.  args as follows:
  // 1. x coord of the CENTER of the circle
  // 2. y coord of the CENTER of the circle
  // 3. radius
  // 4. (0) "start angle" in radians 
  // 5. (2π) "end angle" -- how much of the circ you want to actually draw IN RADIANS

  // for simplicity -- just always use 0 and 2π for the 4th & 5th args, respectively

  ctx.beginPath();
  
  ctx.arc(75, 525, 71, 0, 2 * Math.PI);

  ctx.fillStyle = "#ff0000" // rem u can use hex too!

  ctx.fill();


  // yes of course you can make a circle outline
  ctx.beginPath();
  ctx.arc(75, 325, 71, 0, 2 * Math.PI);
  ctx.strokeStyle = "#999900"
  ctx.lineWidth = 5
  ctx.stroke();

}


// a function that erases canvas
function clearCanvas() {
  // you can erase smaller parts or just one shape
  // for convenience we erase it all
  // this is usually what you want
  ctx.clearRect(0, 0, canvas.width, canvas.height)  
}


function gameOver() {
  document.write(`
    <h1>YOU ARE DEAD YOU SHOULD NOT HAVE CRASHED INTO THAT</h1>
    <FORM>
      <INPUT TYPE="hidden" VALUE="you also shouldn't capitalize your html or use STYLE='' because it's not 1995">
      <BUTTON STYLE="font-size: 18pt">CLICK</BUTTON>
    </FORM>
  `)  
}

let x = 0;
function animate() { // this f should be called animate or animate canv

  // code here will be repeated 60x per second 
  // console.log(++x) // console.logs in an animation frame can really slow it down

  captSquare.move();
  clearCanvas(); // prevent trailers
  captSquare.draw();

  cmdrCircle.draw(); // remember you must redraw everything you want to "stay" on the canvas

  obstacle.draw();

  if(captSquare.checkCollision(obstacle)) {
    gameOver();
    return;    
  }
  // use recursion -- the function will end up calling itself
  window.requestAnimationFrame(animate)

}
animate();




document.getElementById('make-x').addEventListener('click', () => {
  makeX();
})
document.getElementById('make-grid').addEventListener('click', () => {
  makeGrid();
})
document.getElementById('make-rectangles').addEventListener('click', () => {
  makeRectangles();
})
document.getElementById('make-circles').addEventListener('click', () => {
  makeCircles();
})
document.getElementById('clear').addEventListener('click', () => {
  clearCanvas();
})
document.addEventListener('keydown', (event) => {
  // console.log(event.key);
  // you could filterout everything bbut arrow keys here
  if(['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
    cmdrCircle.move(event.key)
  }
  if(['w', 'a', 's', 'd'].includes(event.key)) {
    captSquare.setDirection(event.key)
  }
})
document.addEventListener('keyup', (event) => {
  if(['w', 'a', 's', 'd'].includes(event.key)) {
    captSquare.unsetDirection(event.key)
  }
})
