let slider= document.querySelector('#slider');
slider.style.transform =  'translateX(0px)';

let left= document.querySelector('#left');
let right= document.querySelector('#right');
let i= 0;
let step = 500;

let w =(250+40)*12;

left.addEventListener("click", function(){
    console.log(i);
    if(i<0){
        i=i+step;
        slider.style.transform =  'translateX('+ i +'px)';
        slider.style.transition =  '0.5s';
    }
});
right.addEventListener("click", function(){
    if(i> -w+(step*3)){
        i=i-step;
        slider.style.transform =  'translateX('+ i +'px)';
        slider.style.transition =  '0.5s';

    }   
    
});