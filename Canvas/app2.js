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
ctx.arc(200,200,200,0, Math.PI*2);
ctx.fill();

ctx.fillStyle = 'black';
ctx.strokeRect(100, 100, 200, 200); // Cabeza
ctx.strokeRect(150, 150, 20, 20); // Ojo Iz
ctx.fillRect(160, 160, 10, 10);
ctx.strokeRect(230, 150, 20, 20); // Ojo Der
ctx.fillRect(240, 160, 10, 10); 

ctx.beginPath();
ctx.arc(160,160,25,0, Math.PI *2, true);
ctx.stroke();
ctx.beginPath();
ctx.arc(240,160,25,0, Math.PI *2, true);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(100,160);
ctx.lineTo(135,160);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(265,160);
ctx.lineTo(300,160);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(185,160);
ctx.lineTo(215,160);
ctx.stroke();


ctx.strokeRect(190, 180, 20, 50); // Nariz
ctx.strokeRect(150, 250, 100, 20); // Boca
ctx.strokeRect(190, 250, 10, 10); 
ctx.strokeRect(210, 250, 10, 10); 

ctx.fillRect(90, 90, 220, 40); 
ctx.fillRect(110,70,180,40); 

//corbata
ctx.fillStyle ='red';
ctx.beginPath();
ctx.moveTo(200,300);
ctx.lineTo(230,320);
ctx.lineTo(200,340);
ctx.lineTo(170,320);
ctx.lineTo(200,300);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200,330);
ctx.lineTo(240,350);
ctx.lineTo(200,400);
ctx.lineTo(160,350);
ctx.lineTo(200,330);
ctx.fill();
ctx.stroke();