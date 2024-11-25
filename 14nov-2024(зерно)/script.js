let seeds = [1];
let i = 1;
let num = 1;
let sum = 1;

let div = document.createElement('div');
div.innerText = num ;
document.body.append(div);

while(i<63){
let div = document.createElement('div');

        num = num*2;  
        seeds.push(num);
        sum = sum + num;
       
        div.innerText = num ;
        document.body.append(div);

        i++;

}; 

let divsum = document.createElement('div');
divsum.className += 'titele';
divsum.innerText = sum;
document.body.append(divsum);

let price = document.createElement('div');
price.className += 'titele';
price.innerText = (((sum*0.05)/1000)/1000)*14200 + ' руб за тонну( 14,2 тыс )';

document.body.append(price);

// console.log(seeds, sum);


// console.log((((sum*40)/1000)/1000)*15600 +  ' руб за тонну( 15,6 тыс )' );


