

var params = window
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

console.log( params['img']); 

let blockimg = document.querySelector('#blockimg');
let img = document.createElement('img');

img.className ='main-img';
img.src ='../../images/plates/plate'+ params['img'] +'.png';


blockimg.append(img);

// console.log(blockimg);    
    
    