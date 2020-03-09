<?php

  class personnage{

    public $nom;
    public $vie = 80;
    public $atk = 20;

    public function __construct($nom){$this->nom = $nom;}
    public function heal($amount = null){
      if(is_null($amount)){
        $this->vie = 100;
      }
      $this->amount = $amount;
      $this->vie = $this->vie + $this->amount;
    }
    public function hurt(){$this->vie = 0;}
    public function mort(){
      if ($this->vie <= 0) {
        echo "$this->nom est mort. ";
      } else {
        echo "$this->nom est vivant. ";
      }
    }

  }

?>
