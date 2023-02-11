import text  from "./text-word.js";

var minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
var maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
 console.log(typeof minValue );
// Проверим чтобы пользователь ввел число
if(isNaN(minValue) == true  || isNaN(maxValue) == true   ){
    minValue = 0 ;
    maxValue = 100;

}

// Установим границы для числа которые может ввести пользователь
maxValue = (maxValue >= 1000) ?  999 :maxValue ;
minValue = (minValue <= -10000) ? -999 : minValue;
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

// Кнопка сброса
document.getElementById('btnRetry').addEventListener('click', function () {
    if (!gameRun){// Игра остановлена
        minValue = 0 ;
        maxValue = 100;
        orderNumber = 0;
    }
    orderNumberField.innerText = orderNumber;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    gameRun = true;// Запускаем игру сначала 
    
})

// число больше
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            var phraseRandom = Math.round( Math.random());
              answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;// выводим фразу и завершаем игру
            gameRun = false;
        } else {
             minValue = answerNumber  + 1;// задаем нижнюю границу как середина +1
             answerNumber  = Math.floor((minValue + maxValue) / 2);// переобпределемя середину
            orderNumber++;//  увеличиваем номер вопроса
            orderNumberField.innerText = orderNumber;
              phraseRandom = Math.round( Math.random());

            switch (phraseRandom) {
                case 0:
                    var  answerPhrase = `«Может твое число больше?  ${answerNumber }»`;
                  break;
                case 1:
                    var  answerPhrase = `«Наверное, твое число больше чем ${answerNumber }»`;
                  break;
                case 1:
                    var answerPhrase = `«Скорее всего твое число: ${answerNumber }»`;
                  break;
              } 
              answerField.innerText =answerPhrase ;
        }
    }
})

// число меньше
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue-1){
            var phraseRandom = Math.round( Math.random());
            answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            phraseRandom = Math.round( Math.random());

            switch (phraseRandom) {
                case 0:
                    var  answerPhrase = `Вы загадали число меньше ${answerNumber }?`;
                  break;
                case 1:
                    var answerPhrase = `«Наверное, твое число меньше чем ${answerNumber }»`;
                  break;
                case 1:
                    var answerPhrase = `«Скорее всего твое число меньше: ${answerNumber }»`;
                  break;
              } 
            answerField.innerText =answerPhrase ;
        }
    }
})

// угадали число завершили игру
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        var phraseRandom = Math.round( Math.random()*2);
        let result = text(answerNumber);
      
        switch (phraseRandom) {
            case 0:
                var  answerPhrase = `«Да это легко! Ты загадал ${result } »`;
              break;
            case 1:
                var  answerPhrase = `«Наверное, это число ${result} »`;
              break;
            case 1:
                var  answerPhrase = `«Это число: ${result}»`;
              break;
          }
        answerField.innerText =  answerPhrase ; 
        gameRun = false;
        }
    }
)

