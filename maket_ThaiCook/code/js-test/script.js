let slider= document.querySelector('#slider');
let body= document.querySelector('.body');
let left= document.querySelector('#left');
let right= document.querySelector('#right');
let i= 0;
let step = 300;

body.style.width = 1400+'px';

let w =(200+40)*12;
console.log(body.style);


left.addEventListener("click", function(){
    console.log(i);
    if(i<0){
        i=i+step;
        slider.style.transform =  'translateX('+ i +'px)';
        slider.style.transition =  '0.5s';
    }
});
right.addEventListener("click", function(){
    if(i> -1500){
        i=i-step;
        slider.style.transform =  'translateX('+ i +'px)';
        slider.style.transition =  '0.5s';

    }   
    
});


// let anim = setInterval(function() {
//    slider.style.transform =  'translateX('+ i +'px)'; 
//    console.log(slider.style.transform);
//    i=i-1;
// },100);