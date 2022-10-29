import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  @Input() turn:number=0;
  @Input() icon:string="";


  constructor() { }

  ngOnInit() {}

  MyEvent(){
    if(this.turn==1)
    {
      this.icon="close";
    }
    else
    {
      this.icon="ellipse-outline"
    }
  }

}
