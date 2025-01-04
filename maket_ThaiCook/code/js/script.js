let slider1= document.querySelector('#slider');
slider1.style.transform =  'translateX(0px)';

let left= document.querySelector('#left');
let right= document.querySelector('#right');
let i= 0;
let step = 200;

let w =(250+40)*12;

left.addEventListener("click", function(){

    if(i<0){
        i=i+step;
        slider1.style.transform =  'translateX('+ i +'px)';
        slider1.style.transition =  '0.5s';
    }
});
right.addEventListener("click", function(){
    if(i> -w+(step*8)){
        i=i-step;
        slider1.style.transform =  'translateX('+ i +'px)';
        slider1.style.transition =  '0.5s';

    }   
    
});



let p = document.querySelectorAll('#plate-img');
 p.onmouseover = function(event){
    console.log(234);
 }