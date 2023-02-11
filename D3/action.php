<?php 
// Функция для валидации данных пользователя
function valid($number){
  if($number <=0 || empty($number) || $number>=10000000){

     header('location:http://games/D3/player-choice.html');
  }
  else{
    return $number;
  }
}

class Player_Three_dice {

    public $name;

   public function  __construct($name,$number_one,$number_two )
    {
        $this->name=$name;
        $this->number_one=$number_one;
        $this->number_two=$number_two;
    }
 }

class Three_dice  {

    public function __construct(Player_Three_dice $player1,Player_Three_dice $player2 ){
        $this->player1=$player1;
        $this->player2=$player2;
    }

    // Функция для подбрасывания костей
    public function flip()
      {
        $dice_1=rand(1,6);
        $dice_2=rand(1,6);
        $dice_3=rand(1,6);
        $result=$dice_1 + $dice_2 + $dice_3;
        return $result;
      }
    //   Проверяем числа игрока и Робота и возвращяем имя победителя
    public function start()
    { 
        if($this->flip() == $this->player1->number_one || $this->flip() == $this->player1->number_two){
            return $this->player1->name;
        }
        if($this->flip() == $this->player2->number_one || $this->flip() == $this->player2->number_two){
            return $this->player2->name;
        }
        else{
            return 'Ничья';
        }
    }
  public function winner()
    {
        echo $this->start().'</br>';
        echo 'Соперник выкинул '.$this->player2->number_one.' и '.$this->player2->number_two;
    }
 }

$name=$_POST['player_name'];
$player_number_one=$_POST['player_number_one'];
valid($player_number_one);
$player_number_two=$_POST['player_number_two'];
valid($player_number_two);

$Game_Three_dice = new Three_dice (
    new Player_Three_dice($name,$player_number_one,$player_number_two),
    new Player_Three_dice('Jane',rand(1,18),rand(1,18))
    );
require('congratulation.html');  

?>