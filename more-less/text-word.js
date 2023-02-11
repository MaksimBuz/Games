
   export default  function text_number(n){  
    if(n<0){
        var   minus ='минус ';
        n=Math.abs(n);
        } 
    else{
        var minus = "";
    } 

   let remainder_units = n%10; 
    console.log(remainder_units);
    // еденицы
    switch (remainder_units) {
        case 0:
            var n_units = ``;
          break;
        case 1:
            var n_units = `один`;
          break;
        case 1:
            var  n_units = `два`;
          break;
        case 3:
            var  n_units= `три`;
          break;
        case 4:
            var n_units = `четыре`;
          break;
        case 5:
            var  n_units = `пять`;
          break;
        case 6:
            n_units = `шесть`;
          break;
        case 7:
            n_units = `семь`;
          break;
        case 8:
            n_units = `восемь`;
          break;
        case 9:
            n_units = `Девять`;
          break;
      }
      var answer = minus+ n_units;
    // числа от 11 до 20
    if(n > 10 && n< 20){
     switch (n) {
        case 11:
            var special_numbers = `одиннадцать`;
          break;
        case 12:
            var special_numbers = `двенадцать`;
          break;
        case 13:
            var  special_numbers = `тринадцать`;
          break;
        case 14:
            var special_numbers= `четырнадцать`;
          break;
        case 15:
            var special_numbers = `пятнадцать`;
          break;
        case 16:
            var special_numbers = `шестнадцать`;
          break;
        case 17:
            var special_numbers = `семнадцать`;
          break;
        case 18:
            var special_numbers = `восемнадцать`;
          break;
        case 19:
            var special_numbers = `девятнадцать`;
          break;
      } 
      answer=minus +special_numbers;
    }

// Десятки
    var remainder_dozens=n/10;
    var remainder_dozens=(Math.trunc(remainder_dozens));
    if( remainder_dozens>10){
        remainder_dozens=remainder_dozens%10;
        remainder_dozens=(Math.trunc(remainder_dozens));
    }
    if ( n >= 20 ) {
        switch ( remainder_dozens) {
            case 0:
                var   n_dozens = ``;
            break;
            case 2:
                var  n_dozens = `двадцать `;
            break;
            case 3:
                var  n_dozens= `тридцать `;
            break;
            case 4:
                var  n_dozens= `сорок `;
            break;
            case 5:
                var  n_dozens = `пятьдесят `;
            break;
            case 6:
                var n_dozens = `шестьдесят `;
            break;
            case 7:
                var n_dozens = `семьдесят `;
            break;
            case 8:
                var n_dozens = `восемьдесят `;
            break;
            case 9:
                var n_dozens = `Девяносто `;
            break;
        }
        var answer = minus + n_dozens+n_units;  
    }
    // Сотни
    if(n >100){
        var  remainder_hundreds=n/100;
        remainder_hundreds=(Math.trunc(remainder_hundreds));
        switch (remainder_hundreds) {
            case 1:
                var  n_hundreds = `сто `;
            break;
            case 2:
                var    n_hundreds = `двести `;
            break;
            case 3:
                var  n_hundreds= `триста `;
            break;
            case 4:
                var n_hundreds= `четыреста `;
            break;
            case 5:
                var  n_hundreds = `пятьсот `;
            break;
            case 6:
                var n_hundreds = `шестьсот `;
            break;
            case 7:
                var n_hundreds = `семсот `;
            break;
            case 8:
                var n_hundreds = `восемьсот `;
            break;
            case 9:
                var  n_hundreds = `девятьсот `;
            break;
            }    
            var answer = minus +n_hundreds+n_dozens+n_units;
        }    
        // Проверка на длинну ответа
    if(answer.length>20){
        answer=n;
    }
    return answer;
}


