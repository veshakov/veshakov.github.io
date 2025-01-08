

let params = window
.location
.search
.replace('?','')
.split('&')
.reduce(
    function(p,e){
        var a = e.split('=');
        p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        return p;
    },
    {}
);

// console.log( params['img']); 

let blockimg = document.querySelector('#blockimg');
let img = document.createElement('img');

img.className ='main-img';


let j =0;

console.log(Number(params[img]));

if(Number(params[img])>3){
     j = Number(params[img])-3;
    console.log( params);
}

img.src ='../media/plates/plate'+ params['img'] +'.png';
img.alt ="Фото блюда";

blockimg.append(img);

// console.log(blockimg);    
    

document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});
    