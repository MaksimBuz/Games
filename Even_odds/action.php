<?php
// Класс для создания игроков
 class Player{
    public $name;
    public $coins;

   public function  __construct($name ,$coins)
    {
        $this->name=$name;
        $this->coins=$coins;
    }
    
    public function point( $player )
    {
        $this->coins++;
        $player->coins--;
    }
   
 }
  $choice = $_POST['player_choice'];

 class game 
  {
    protected $player1;
    protected $player2;
    protected $flips=1;

    public function __construct(Player $player1,Player $player2 ){
        $this->player1=$player1;
        $this->player2=$player2;
    }
    // Функция для подбрасывания костей
    public function flip()
      {
        $dice_1=rand(1,6);
        $dice_2=rand(1,6);
        $result=$dice_1+$dice_2;
        if($result%2==0){
          return 'Чет';
        }
        else{
          return 'Нечет';
        }
      }

    public function start()
      { 
        while ($this->player1->coins>0 && $this->player2->coins>0){
        
          if ($this->flip() == $_POST['player_choice']) {
          $this->player1->point($this->player2);  
        
        } else {
          $this->player2->point($this->player1);       
        }
          if($this->player1->coins==0 || $this->player2->coins==0){
          return  $this->end();
        }
           $this->flips++;
      }
    }
// Вывод победителя
    public function winner()
    {
         if($this->player1->coins > $this->player2->coins )
         {
           return $this->player1;
       
         } else {
           return $this->player2;
         }
    }
  
    public function end()
    {
      echo "Количество совершенных бросков :".$this->flips."</br>";  
      return $this->winner()->name;
    }
 }
 
$name=$_POST['player_name'];
$point= $_POST['player_point'];

if(empty($point)){
$point=1;
}

$point=(integer) $point;
$Game = new game(
    new Player($name,$point),
    new Player('Jane',$point)
    
    );

$Game->start();
?>
