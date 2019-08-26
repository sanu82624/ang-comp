import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  @Input() ctrlId: string = "";
  @Input() title: string = "Header part";
  @Input() message: string = "this is the meessage part!";
  @Input() icon: string = "glyphicon glyphicon-info-sign";
  @Input() direction: Directions = Directions.RIGHT;
  @Input() trigger: Triggers = Triggers.FOCUS;

  @Output() popoverHiden: EventEmitter<object> = new EventEmitter<object>();
  @Output() popoverShow: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  onHidden(event: any){
    this.popoverHiden.emit({
      event: event
    });
  }

  onShown(event: any){
    this.popoverShow.emit({
      event: event
    });
  }
}

export enum Directions {
  RIGHT = "right",
  LEFT = "left",
  TOP = "top",
  BOTTOM = "bottom"
}

export enum Triggers {
  MOUSE = "mouseenter:mouseleave",
  HOVER = "hover",
  FOCUS = "focus",
  CLICK = "click"
}