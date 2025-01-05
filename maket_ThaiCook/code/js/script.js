let slider1= document.querySelector('#slider');
slider1.style.transform =  'translateX(0px)';

let left= document.querySelector('#left');
let right= document.querySelector('#right');
let i= 0;
let step = 190;

// let a = slider1.getElementsByTagName('a');
// a[0].style.width = step;
let win_wid = window.innerWidth;
let w =((step+20)*(slider1.getElementsByTagName('a').length));

window.addEventListener("resize", function() {
    win_wid =window.innerWidth;
    console.log(w- win_wid);
    
    return  win_wid;

});



left.addEventListener("click", function(){
    
    if(i<0){
        i=i+step;
        slider1.style.transform =  'translateX('+ i +'px)';
        slider1.style.transition =  '0.5s';
        // console.log(i);
        console.log(w- win_wid +'<');

    }
});
right.addEventListener("click", function(){
    let calc = w-win_wid;

    if(win_wid<1000){
       calc = w-win_wid+step+40;
    }
    if(i> - calc ){

        i=i-step;
        slider1.style.transform =  'translateX('+ i +'px)';
        slider1.style.transition =  '0.5s';
        
        console.log(w- win_wid, calc);
    }   
    
});



