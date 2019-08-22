import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input() value: string = "";
  @Input() type: BadgeTypes = BadgeTypes.Primary;
  @Input() isExtraRoundedBadge: boolean = false;
  @Input() isLink: boolean = false;
  @Input() isClickable: boolean = true;

  @Output() badgeClick: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  getClass(){
    return (this.isExtraRoundedBadge ? "badge-pill " : "") + this.type; 
  }

  onBadgeClick(event: any){
    this.badgeClick.emit({
      event: event
    });
  }
}

export enum BadgeTypes {
  Primary = "badge-primary",
  Secondary = "badge-secondary",
  Success = "badge-success",
  Info = "badge-info",
  Warning = "badge-warning",
  Danger = "badge-danger",
  Light = "badge-light",
  Dark = "badge-dark"
}
