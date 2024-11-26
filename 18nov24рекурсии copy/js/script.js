let startBox = document.createElement('div');
// startBox.style.margin = 'auto';
document.body.append(startBox);
let color1 = 0;
let color2 = 100;
let color3 = 1;


    function draw(size, box){

            if (size>1) {

                let boxChild = document.createElement('div');
                boxChild.style.width = (size + 25) + 'px';
                boxChild.style.height = (size - 20) + 'px';
               
                boxChild.style.border = '3px solid rgb( '+ color1 + ',' + color2 + ',' + color3 + ')';
                color1 = color1 + 4 ;
                color3 = color3 + 25 ;

                   const intervalId = setInterval(function() {

                    boxChild.style.transform = 'rotate(' + size/10 + 'deg) translateX(' + 1 + 'px) translateY(' + 1 + 'px)';
                    size++;
                    color1 = color1 - 10;
                    color3 = color3 - 100;
                
                },100); 
 
            box.append(boxChild);
            draw(size-10, boxChild);
 
            } 
        }

    draw(1000, startBox);

/////
//https://ru.stackoverflow.com/questions/640024/%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D1%81%D0%BC%D0%B5%D0%BD%D0%B0-%D1%86%D0%B2%D0%B5%D1%82%D0%B0-%D1%83-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0


let logo = document.querySelector('#logo');

// Генерируем и устанавливаем рандомный фон
const setRandomBg = _ => logo.style.background = Array(...Array(6)).reduce(_ => _ += '0123456789ABCDEF'[Math.floor(Math.random() * 16)], '#');

// При наведении курсора на объект
logo.addEventListener('mouseenter', _ => {
  // Ставим новый цвет
  setRandomBg();
  // Перезапускаем анимацию (да, на хак похоже, но увы, пока что есть)
  logo.classList.remove('anim');
  setTimeout(_ => logo.classList.add('anim'), 10);
});
// По окончании итерации анимации, меняем фон
logo.addEventListener('animationiteration', _ => setRandomBg());

setRandomBg();
