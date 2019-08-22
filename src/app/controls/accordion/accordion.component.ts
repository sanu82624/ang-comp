import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animations } from './animations';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [Animations]
})
export class AccordionComponent implements OnInit {

  @Input() list: Array<AccordionContent> = [{header: "head 1", body: "body 1", status: "hide"}, {header: "head 2", body: "body 2", status: "hide"}];
  @Input() isOneContentShow: boolean = true;
  @Input() isOnlyHeaderTextClick: boolean = false;

  @Output() headerClick: EventEmitter<AccordionContent> = new EventEmitter<AccordionContent>();

  constructor() { }

  ngOnInit() {
  }

  onHeaderClick(index: number, item: AccordionContent){
    this.list[index].status = (this.list[index].status === "hide") ? "show" : "hide";
    if(this.isOneContentShow){
      for(var cnt=0; cnt<this.list.length; cnt++){
        if(cnt !== index){
          if(this.list[cnt].status === "show"){
            this.list[cnt].status = "hide";
          }
        }
      }
    }
    this.headerClick.emit(item);
  }
}

export class AccordionContent{
  header: string;
  body: string;
  status: string
}
