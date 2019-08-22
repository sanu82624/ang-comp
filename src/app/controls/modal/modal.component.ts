import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalId: string = "";
  @Input() heading: string = "Modal Header";
  @Input() body: string = "asdgf<br /> sdsdsds";
  @Input() isDialogCentered: boolean = false;
  @Input() size: ModalSizes = ModalSizes.FULL_WIDTH;
  @Input() isScrollInside: boolean = false;
  @Input() type: ModalTypes = ModalTypes.SUCCESS;
  @Input() direction: ModalDirections = ModalDirections.TOP_LEFT;

  @Input() isCloseBtnShow: boolean = true;
  @Input() isHeaderShow: boolean = true;
  @Input() isFooterShow: boolean = true;
  @Input() isLeftBtnShow: boolean = true;
  @Input() isMiddleBtnShow: boolean = false;
  @Input() isRightBtnShow: boolean = true;
  @Input() isLeftBtnDirecgtionLeft: boolean = true;
  @Input() isMiddleBtnDirecgtionLeft: boolean = false;
  @Input() isRightBtnDirecgtionLeft: boolean = true;
  @Input() leftBtnType: ButtonTypes = ButtonTypes.PRIMARY;
  @Input() middleBtnType: ButtonTypes = ButtonTypes.SECONDARY;
  @Input() rightBtnType: ButtonTypes = ButtonTypes.DANGER;
  @Input() leftBtnText: string = "Ok";
  @Input() middleBtnText: string = "Cancel";
  @Input() rightBtnText: string = "Close";

  @Output() closeBtnClick: EventEmitter<object> = new EventEmitter<object>();
  @Output() leftBtnClick: EventEmitter<object> = new EventEmitter<object>();
  @Output() middleBtnClick: EventEmitter<object> = new EventEmitter<object>();
  @Output() rightBtnClick: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  getClass(){
    return (this.isDialogCentered ? "modal-dialog-centered " : " ") + this.size + (this.isScrollInside ? " modal-dialog-scrollable" : "");
      //+ " " + this.direction;
  }

  getLeftBtnClass(){
    return (this.isLeftBtnDirecgtionLeft ? "mr-auto " : "") + this.leftBtnType;
  }

  getMiddleBtnClass(){
    return (this.isMiddleBtnDirecgtionLeft ? "mr-auto " : "") + this.middleBtnType;
  }

  getRightBtnClass(){
    return (this.isRightBtnDirecgtionLeft ? "mr-auto " : "") + this.rightBtnType;
  }

  onCloseBtnClick(event: any){
    this.closeBtnClick.emit({
      event: event
    });
  }

  onLeftBtnClick(event: any){
    this.leftBtnClick.emit({
      event: event
    });
  }

  onMiddleBtnClick(event: any){
    this.middleBtnClick.emit({
      event: event
    });
  }

  onRightBtnClick(event: any){
    this.rightBtnClick.emit({
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

export enum ModalSizes {
  SMALL = "modal-sm",
  NORMAL = "",
  LARGE = "modal-lg",
  EXTRA_LARGE = "modal-xl",
  FULL_WIDTH = "modal-fluid"
}

export enum ModalTypes {
  DEFAULT = "",
  PRIMARY = "bg-primary text-white",
  SECONDARY = "bg-secondary text-white",
  SUCCESS = "bg-success text-white",
  DANGER = "bg-danger text-white",
  WARNING = "bg-warning text-dark",
  INFO = "bg-info text-white",
  LIGHT = "bg-light text-dark",
  DARK = "bg-dark text-white"
}

export enum ModalDirections {
  TOP_RIGHT = "modal-side modal-top-right",
  TOP_LEFT = "modal-side modal-top-left",
  BOTTOM_RIGHT = "modal-side modal-bottom-right",
  BOTTOM_LEFT = "modal-side modal-bottom-right",
  NORMAL = ""
}