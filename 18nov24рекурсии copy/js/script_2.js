let startBox = document.createElement('div');
startBox.style.margin = '500px';
document.body.append(startBox);
let color1 = 0;
let color2 = 100;
let color3 = 1;
startBox.style.border = "1px solid red";
startBox.style.width = "auto";
startBox.style.height = "auto";

    function draw(size, box){

            if (size>5) {

                let boxChild1 = document.createElement('div');
                boxChild1.style.width = (size/4) + 'px';
                boxChild1.style.height = (size/2) + 'px';
                
                boxChild1.style.border = '1px solid rgb( '+ color1 + ',' + color2 + ',' + color3 + ')';
                
                
                let boxChild2 = document.createElement('div');
                boxChild2.style.width = (size/4) + 'px';
                boxChild2.style.height = (size/2) + 'px';
                
                boxChild2.style.border = '1px solid rgb( '+ color1 + ',' + color2 + ',' + color3 + ')';
                
                // color1 = color1 + 4 ;
                // color3 = color3 + 25 ;
                
                
                // boxChild1.style.transform = 'rotate( -20deg) translateY(' + size*-0.2 + 'px) translateY(' + size*0.2 + 'px)';
                // boxChild2.style.transform = 'rotate( 20deg)  translateX(' + size*0.2 + 'px)  translateY(' + size*-1.2 + 'px)';
                
                color1 = color1 + 1 ;
                color3 = color3 + 15 ;
                
                boxChild1.style.transform = 'rotate( -10deg) translateX(' + size*-0.0625 + 'px) translateY(' + size*-0.0625 + 'px) ';
                boxChild2.style.transform = 'rotate( 10deg) translateX(' + size*0.3125 + 'px)  translateY(' + size*-0.615 + 'px)';

                //    const intervalId = setInterval(function() {

                    // boxChild.style.transform = 'rotate(' + size/10 + 'deg) translateX(' + 1 + 'px) translateY(' + 1 + 'px)';
                    // size++;
                    // color1 = color1 - 10;
                    // color3 = color3 - 100;
                
                // },100); 
 
            box.append(boxChild1);
            box.append(boxChild2);

            draw(size/2, boxChild1);
            draw(size/2, boxChild2);

 
            } 
        }

    draw(800, startBox);