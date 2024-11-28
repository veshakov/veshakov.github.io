let box = document.querySelector('#main');
let memory =[];
let idarr =[];
let xyParts =[];

let howlong = 50;

let color1 = 0;
let color2 = 100;
let color3 = 1;

let ind = -2;
let i = 3;
let memx = -20;
let memy = -19;
let long = 1;
let num = 0;

let img = document.querySelector('#img');
img.style.position = 'absolute';
img.style.zIndex = '0';
img.style.width = '10%';
img.style.height = 'auto';
img.style.border ='0px';


function draw(quantity, box){
  
  if (quantity>1) {
    ind = ind-1;
    let tail = document.createElement('div');
    tail.style.width = '20px';
    tail.style.height = '20px';
    tail.style.position = 'absolute';
    tail.style.border ='0px';
    tail.style.borderRadius = '10px';
    tail.style.zIndex = ind;
    
    tail.style.background = 'rgb( '+ color1 + ',' + color2 + ',' + color3 + ')';
    color1 = color1 + 6 ;
    color3 = color3 + 25 ;
    
    i++;
    let id = 'tail' + i;
    tail.id = id;
    idarr.push(id);
    
    box.append(tail);
    draw(quantity-1, box);
    
  } 
}
draw(howlong, box);

idarr.forEach(el => {
  if(long<howlong){
    let obj = {}; 
    memx = memx-4;
    memy = memy-4;
    obj.value = [memx,memy];
    xyParts.push(obj);
    long++;
  }
});
console.log(xyParts);
(function () {
  
  function onMouseMove(event) {
    let mouseX = event.pageX;
    let mouseY = event.pageY;
    let gbc = box.getBoundingClientRect();
    
    if (gbc.left <= mouseX && mouseX <= gbc.right && gbc.top <= mouseY ) {
      memory.push(mouseX,mouseY);
      let x =0;
      let y =0;
      let coord = img.getBoundingClientRect();
      idarr.forEach(el => {
        let part = document.querySelector('#'+ el);
        if(num<(howlong-2)){
          
          let arr = xyParts[num].value;
          num++;
          x =arr[0];
          y =arr[1];
          
        }else{
          num = 0;
        }
        img.style.transform = 'translate3d(' + memory.at(-10) + 'px, ' + memory.at(-9) + 'px, 0px) ';/* rotate('+ memory.at(x)  + 'deg) */
        part.style.transform = 'translate3d(' + memory.at(x)  + 'px, ' + memory.at(y) + 'px, 0px) ';
        // console.log(coord.bottom, coord.top);
        // img.style.top = memory.at(x) + 'px';
        
      });
      
    }
    
  }
  
  box.addEventListener('mousemove', onMouseMove, false);
  
})();


// console.log(img.target.scrollTop+img.target.clientHeight);





// window.addEventListener("mousemove", (e) => {

//     var rect = img.getBoundingClientRect();
//     var x = (e.pageX - rect.left) / 30 + "px";
//     var y = (e.pageY - rect.top) / 30 + "px";
//     img.style.transform = "rotate(" + x +"deg)";

// });
 
