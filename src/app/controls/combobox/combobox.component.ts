import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Animations } from './animations';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss'],
  animations: [Animations]
})
export class ComboboxComponent implements OnInit, AfterViewInit  {

  @Input() id: string = "";
  @Input() label: string = "Website";
  @Input() backLabel: string = "";
  @Input() placeholder: string = "";
  @Input() size: Sizes = Sizes.Normal;
  @Input() downListHeight: DownListHeights = DownListHeights.L;
  @Input() endSuccessBtnText: string = "";
  @Input() endFailBtnText: string = "";
  @Input() endSuccessBtnIcon: string = ""; // full name like glyphicon glyphicon-user
  @Input() endFailBtnIcon: string = ""; // full name like glyphicon glyphicon-user
  @Input() endSuccessBtnType: ButtonTypes = ButtonTypes.Success;
  @Input() endFailBtnType: ButtonTypes = ButtonTypes.Danger;
  @Input() data: string = ""; // bind with ngModel two way
  @Input() isHide: boolean = false;
  @Input() isReadOnly: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() isRequired: boolean = true;
  @Input() isSubmit: boolean = false;

  @Output() dataChange = new EventEmitter();
  @Output() endSuccessBtnClick: EventEmitter<object> = new EventEmitter<object>();
  @Output() endFailBtnClick: EventEmitter<object> = new EventEmitter<object>();

  isValueChng: boolean = false;
  downListState: string = 'initial';

  constructor() { 
    
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    document.getElementById('divList').style.width = (document.getElementById(this.id).children[0].getElementsByTagName("input")[0].offsetWidth - 1) + 'px';
    document.getElementById('divList').style.marginLeft = (document.getElementById(this.id).children[0].getElementsByTagName("div")[0].offsetWidth - 1) + 'px';
    document.getElementById('btnDownArrow').style.left = ((document.getElementById(this.id).children[0].getElementsByTagName("input")[0].offsetWidth) + 
      (document.getElementById(this.id).children[0].getElementsByTagName("div")[0].offsetWidth) - 27) + 'px';
  }

  getDownListIcon(){
    return ((this.downListState === "final") ? "glyphicon-menu-up" : "glyphicon-menu-down");
  }

  onDownBtnClick(){
    this.downListState = this.downListState === 'initial' ? 'final' : 'initial';
  }

}

export enum Sizes {
  Small = "input-group-sm",
  Normal = "",
  Large = "input-group-lg"
}

export enum ButtonTypes {
  Basic = "btn",
  Default = "btn btn-default",
  Primary = "btn btn-primary",
  Success = "btn btn-success",
  Info = "btn btn-info",
  Warning = "btn btn-warning",
  Danger = "btn btn-danger",
  Link = "btn btn-link"
}

export enum DownListHeights{
  XS = "80px",
  S = "110px",
  L = "130px",
  XL = "160px",
  XXL = "200px"
}
