import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';


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
  statusRed: boolean = false;
  statusBlue: boolean = false;
  statusGreen: boolean = false;
  statusYellow: boolean = false;

  constructor() {}

  ngOnInit(): void {

  }

 


  randomNumber(): number{
    return Math.floor((Math.random() * 8) + 1);
    
  }

  

  flash(color: string){
    
    switch (color) {
      case "red":
        this.statusRed = true;      
      setTimeout(()=>{
        this.statusRed = false;
      }, 1000);
        break;
      case "blue":
        this.statusBlue = true;      
      setTimeout(()=>{
        this.statusBlue = false;
      }, 1000);
        break;
        case "green":
        this.statusGreen = true;      
      setTimeout(()=>{
        this.statusGreen = false;
      }, 1000);
        break;
        case "yellow":
        this.statusYellow = true;      
      setTimeout(()=>{
        this.statusYellow = false;
      }, 1000);
        break;
      default:
        break;
    }

    
  }

  addSequence():void{

    let temp = this.randomNumber();

    if(temp < 2){
      this.sequence.push("red");
      this.statusRed = true;      
      setTimeout(()=>{
        this.statusRed = false;
      }, 1000);

    }else if(temp < 4){
      this.sequence.push("blue");
      this.statusBlue = true;      
      setTimeout(()=>{
        this.statusBlue = false;
      }, 1000);
    }else if(temp < 6){
      this.sequence.push("green");
      this.statusGreen = true;      
      setTimeout(()=>{
        this.statusGreen = false;
      }, 1000);
    }else{
      this.sequence.push("yellow");
      this.statusYellow = true;      
      setTimeout(()=>{
        this.statusYellow = false;
      }, 1000);
    }

    for (let i = 0; i < this.sequence.length; i++) {      
        
          this.flash(this.sequence[i].toString()); 
               
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

