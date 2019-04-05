const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

function makeRed(){
  for (let x = 0; x<= canvas.width; x += 100){
    for (let y=0; y<= canvas.height; y += 100){
      ctx.beginPath()
      ctx.rect(x,y,50,50)
      ctx.fillStyle = "rgb(255,0,0)"
      ctx.fill();
      
    }
  }
  for (let x =50; x<= canvas.width; x += 100){
    for (let y=50; y<= canvas.height; y += 100){
      ctx.beginPath()
      ctx.rect(x,y,50,50)
      ctx.fillStyle = "rgb(255,0,0)"
      ctx.fill();
      
    }
  }
  
}

function makeBlack(){
  for (let x = 50; x<= canvas.width; x += 100){
    for (let y=0; y<= canvas.height; y += 100){
      ctx.beginPath()
      ctx.rect(x,y,50,50)
      ctx.fillStyle = "rgb(0,0,0);"
      ctx.fill();
      
    }
  }
  for (let x =0; x<= canvas.width; x += 100){
    for (let y=50; y<= canvas.height; y += 100){
      ctx.beginPath()
      ctx.rect(x,y,50,50)
      ctx.fillStyle = "rgb(0,0,0)"
      ctx.fill();
      
    }
  }
}


makeBlack();
makeRed();