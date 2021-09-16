import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gameCounter:number=0;
  tempCounter:number=0;

  color:string = "";

  sequence:string[]=[];
  playerSequance:string[]=[];

  sound1url:string = "../sounds/brah.mp3";
  sound2url:string = "../sounds/Goat_Scream_1.mp3";
  sound3url:string = "../sounds/oof.mp3";
  sound4url:string = "../sounds/pew-pew-lame-sound-effect.mp3";
  sound5url:string = "../sounds/yeet.mp3";

  constructor() {}

  ngOnInit(): void {

  }

  setInterval(function() {
    new Audio(this.sound1url).play();
  }, 17000);


  randomNumber(): number{
    return Math.floor((Math.random() * 8) + 1);
    
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  addSequence():void{

    let temp = this.randomNumber();

    if(temp < 2){
      this.sequence.push("red");
      document.getElementById("red")?.setAttribute('class', 'button is-black');
      
      this.delay(2000);
      document.getElementById("red")?.setAttribute('class', 'button is-danger');

    }else if(temp < 4){
      this.sequence.push("blue");
      document.getElementById("blue")?.setAttribute('class', 'button is-black');      
      this.delay(2000);
      document.getElementById("blue")?.setAttribute('class', 'button is-info');
    }else if(temp < 6){
      this.sequence.push("green");
      document.getElementById("green")?.setAttribute('class', 'button is-black');      
      this.delay(2000);
      document.getElementById("green")?.setAttribute('class', 'button is-success');
    }else{
      this.sequence.push("yellow");
      document.getElementById("yellow")?.setAttribute('class', 'button is-black');      
      this.delay(2000);
      document.getElementById("yellow")?.setAttribute('class', 'button is-warning');
    }

    console.log(this.sequence);
    console.log(temp);
  }

  checkSequence(a:string):void{

    if(a == this.sequence[this.tempCounter]){

      if(this.playerSequance.length < this.sequence.length){
        this.playerSequance.push(a);
        this.tempCounter++;
        if(this.playerSequance.length == this.sequence.length){
          alert("congrats");
          this.playerSequance=[];
          this.tempCounter=0;
          this.addSequence();
        }
      }
    }else{
      console.log(this.sequence[this.tempCounter]);
      console.log(this.playerSequance[this.tempCounter]);

      this.playerSequance=[];
      this.tempCounter=0;
      this.sequence=[];
      this.gameCounter=0;
      alert("You Lose");
    }
      
  }
}

