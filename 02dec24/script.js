let whole = 28;

let part = prompt('Введите число : ');

if(part%7==0 || part%4==0 && part<whole ){
    console.log('yes');
}else{
    console.log('no');
}

// if( part<whole && part%4 == 0 && part/4 <7 ){
//     console.log('Получить кусок с 16 дольками можно');

// }else{
//     console.log('no');
// }

// if( part1<(whole-part) && (whole-part)%3 == 0  ){
//     console.log('Получить кусок с 9 дольками можно');
   
// }else{
//     console.log('no');
// }

