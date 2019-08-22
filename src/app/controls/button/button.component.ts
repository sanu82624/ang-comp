import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() value: string = "Submit1";
  @Input() type: ButtonTypes = ButtonTypes.PRIMARY;
  @Input() size: ButtonSizes = ButtonSizes.NORMAL;
  @Input() isDisabled: boolean = false;
  @Input() category: ButtonCategories = ButtonCategories.BUTTON;

  @Output() btnClick: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  getButtonType(){
    return this.type + " " + this.size;
  }

  getCategories(){
    return ButtonCategories;
  }

  onBtnClick(event: any){
    this.btnClick.emit({
      event: event
    });
  }
}

export enum ButtonTypes {
  DEFAULT = "btn-default",
  PRIMARY = "btn-primary",
  SECONDARY = "btn-secondary",
  SUCCESS = "btn-success",
  INFO = "btn-info",
  WARNING = "btn-warning",
  DANGER = "btn-danger",
  LINK = "btn-link",
  LIGHT = "btn-light",
  DARK = "btn-dark",
  PRIMARY_OUTLINE = "btn-outline-primary",
  SECONDARY_OUTLINE = "btn-outline-secondary",
  SUCCESS_OUTLINE = "btn-outline-success",
  INFO_OUTLINE = "btn-outline-info",
  WARNING_OUTLINE = "btn-outline-warning",
  DANGER_OUTLINE = "btn-outline-danger",
  LIGHT_OUTLINE = "btn-outline-light",
  DARK_OUTLINE = "btn-outline-dark"
}

export enum ButtonSizes {
  LARGE = "btn-lg",
  NORMAL = "",
  SMALL = "btn-sm"
}

export enum ButtonCategories {
  BUTTON = "button",
  INPUT_BUTTON = "input-button",
  INPUT_SUBMIT = "input-submit",
  INPUT_RESET = "input-reset"
}
