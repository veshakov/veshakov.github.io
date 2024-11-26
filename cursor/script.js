let memory =[];
let box = document.querySelector('#main');

let img = document.createElement('div');
img.style.position = 'absolute';
img.style.zIndex = '0';
img.style.width = '10px';
img.style.height = '10px';
img.style.background = 'red';
box.append(img);

  let tail = document.createElement('div');
  tail.style.width = '10px';
  tail.style.position = 'absolute';
  tail.style.zIndex = '1';
  tail.style.height = '10px';
  tail.style.background = 'green';
  box.append(tail);

  let tail2 = document.createElement('div');
  tail2.style.width = '10px';
  tail2.style.position = 'absolute';
  tail2.style.zIndex = '2';
  tail2.style.height = '10px';
  tail2.style.background = 'blue';
  box.append(tail2);

(function () {

  function onMouseMove(event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    var crd = box.getBoundingClientRect();

    var activePointer = crd.left <= mouseX && mouseX <= crd.right && crd.top <= mouseY && mouseY <= crd.bottom;

    if (crd.left <= mouseX && mouseX <= crd.right && crd.top <= mouseY && mouseY <= crd.bottom) {
      if (img.classList.contains('box-pointer-hidden') && tail.classList.contains('box-pointer-hidden')) {
        
      }
      // function getRandomNumber(min, max) {
      //   let ran = Math.random() * (40 - (-40)) - 40;
      //  return ran;
      
      // }
      memory.push(mouseX,mouseY);

      tail.style.transform = 'translate3d(' + memory.at(-10)  + 'px, ' + memory.at(-9) + 'px, 0px)';
      tail2.style.transform = 'translate3d(' + memory.at(-6)  + 'px, ' + memory.at(-5) + 'px, 0px)';
      img.style.transform = 'translate3d(' + mouseX + 'px, ' + mouseY + 'px, 0px)';
     
 



    }
  }

  function disablePointer() {
    requestAnimationFrame(function hidePointer() {
      img.classList.add('box-pointer-hidden');
      tail.classList.add('box-pointer-hidden');

    });
  }

  box.addEventListener('mousemove', onMouseMove, false);
  box.addEventListener('mouseleave', disablePointer, false);

})();