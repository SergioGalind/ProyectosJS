const lienzo = document.querySelector('#lienzo');

const ctx = lienzo.getContext('2d');

function cuadrito(ctx, x, y){
    ctx.fillStyle='green';
    ctx.strokeRect(x,y,10,10);
}

let ejeX =0;
let ejeY =0;
setInterval(()=>{
    cuadrito(ctx.ejeX,ejeY);
    ejeX+=20;
},500);

ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(150,100,50,0, Math.PI*2); // ojo izq


ctx.arc(250,100,50,0, Math.PI*2); // ojo der
ctx.fill(); 



ctx.fillStyle = 'Blue';
ctx.beginPath();
ctx.arc(150,100,20,0, Math.PI*2); // ojo izq
ctx.fill();

ctx.fillStyle = 'Blue';
ctx.beginPath();
ctx.arc(250,100,20,0, Math.PI*2); // ojo izq
ctx.fill();

ctx.beginPath();
      ctx.arc(100, 180, 20, Math.PI, 0, false);
      ctx.stroke();
      ctx.closePath();
ctx.beginPath();
      ctx.arc(300, 180, 20, Math.PI, 0, false);
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      
      ctx.ellipse(200, 160, 100 ,150, 0, 0, Math.PI);
      ctx.stroke();
      ctx.closePath();
//Pestañas
      ctx.beginPath();
      ctx.moveTo(100,60);
      ctx.lineTo(110,75);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(110,50);
      ctx.lineTo(110,95);
      ctx.stroke();

