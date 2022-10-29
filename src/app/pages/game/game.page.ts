import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  list:any=[0,0,0,0,0,0,0,0,0]
  turn:number=1;
  icon:string;
  winner:string;

  constructor() { }

  ngOnInit() {
  }

  change(id, symbol, icon) {
    document.getElementById('ico'+ id).setAttribute('name', icon);
    document.getElementById(id).setAttribute('disabled', 'true');
    this.list[id] = symbol
  }

  move(ev)
    {
      if(this.turn==1)
    {
      this.icon='close';
      this.change(ev.srcElement.id,'x',this.icon);
      this.turn=2;
    }
    else
    {
      this.icon='ellipse';
      this.change(ev.srcElement.id,'o',this.icon);
      this.turn=1;
    }
    console.log(this.list);
    this.viewWinner();

  }

  viewWinner(){
    if(this.list[0]=='x' && this.list[1]=='x' && this.list[2]=='x')
    {
      this.winner="jugador 1 ha ganado la partida";
    }
    else
    {
      if(this.list[0]=='o' && this.list[1]=='o' && this.list[2]=='o')
      {
        this.winner="jugador 2 ha ganado la partida";
      }
    }
  }

}
