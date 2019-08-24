import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() ctrlId: string = "chkbx1";
  @Input() label: string = "Website";
  @Input() type: CheckboxTypes = CheckboxTypes.SUCCESS;
  @Input() category: CheckboxCategories = CheckboxCategories.SIMPLE_CHK;
  @Input() isDisabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  getBtnClass(){
    if(this.category === CheckboxCategories.ROUND_TOGGLE_TEXT || this.category === CheckboxCategories.TOGGLE_TEXT){
      return this.type;
    } else if(this.category === CheckboxCategories.SIMPLE_CHK || this.category === CheckboxCategories.SIMPLE_ROUND_CHK){
      return "chckbx-" + this.type;
    }
    return "btn-" + this.type + " border border-" + this.type + " rounded-0";
  }

  getLabelClass(){
    if(this.category === CheckboxCategories.BUTTON){
      return "btn-" + this.type + " chk-btn-label";
    } else if(this.category === CheckboxCategories.ROUND_TOGGLE_TEXT || this.category === CheckboxCategories.TOGGLE_TEXT){
      return "text-" + this.type;
    }
    return "btn-default border border-" + this.type + " border-left-0 rounded-0";
  }

  isShowCategory(catId: number){
    return (this.category === catId);
  }
}

export enum CheckboxTypes {
  DEFAULT = "default",
  PRIMARY = "primary",
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  DANGER = "danger"
}

export enum CheckboxCategories {
  TWO_BOX = 1,
  BUTTON = 2,
  ROUND_TOGGLE_TEXT = 3,
  TOGGLE_TEXT = 4,
  TICK_CROSS = 5,
  SIMPLE_CHK = 6,
  SIMPLE_ROUND_CHK = 7
}