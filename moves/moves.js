const lienzo = document.querySelector('#lienzo');
const body = document.querySelector(`body`);
const ctx = document.querySelector(`2d`);

let direction=1; 

const vampire ={
    x:1,
    y:1,
    pinta: function(){
        ctx.font='30px Serif';
        ctx.fillText('🦇', this.x*20, this.y *20);
    }
}
const comida = [];
for(let i = 0; i < 10; i++){
    comida.push({
        x: Math.floor(Math.random() * 30),
        y: Math.floor(Math.random() * 20) + 1,
        pinta: function(){
            ctx.fillText('🩸', this.x * 20, this.y * 20);
        },
        live: true
    });
}

let posx=0;
let posy=1;

setInterval(()=>{
    ctx.clearRect(0,0,650,400);
    vampire.x=posx;
    vampire.y=posx;
    vampire.pinta();
    comida.forEach(blood=>{
        if (posx === blood.x && posy === blood.y){
            blood.live = false;
        }
        if (blood.live)
            blood.pinta();
    });
    switch(direction){
        case 1:
            posx++;
            break;
        case 2: 
            posy++;
            break;
        case 3:
            posx--;
            break;
        case 4:
            posy--;
            break;
    }
    if (posx>32) posx=0;
    if (posx<0) posx=32;
    if (posy>20) posy=0;
    if (posy<0) posy=20;
}, 500);

body.addEventListener('Keydown',(e) =>{
    switch(e.key){
        case 'ArrowRight':
            direction=1;
            break;
        case 'ArrowDown':
            direction=2;
            break;
        case 'ArrowLeft':
            direction=3;
            break;
        case 'ArrowUp':
            direction=4;
            break;
  
    }
});