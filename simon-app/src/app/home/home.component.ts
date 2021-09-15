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

  constructor() {}

  ngOnInit(): void {

  }

  randomNumber(): number{
    return Math.floor((Math.random() * 8) + 1);
    
  }

  addSequence():void{

    let temp = this.randomNumber();

    if(temp < 2){
      this.sequence.push("red");
    }else if(temp < 4){
      this.sequence.push("blue");
    }else if(temp < 6){
      this.sequence.push("green");
    }else{
      this.sequence.push("yellow");
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

