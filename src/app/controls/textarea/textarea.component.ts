import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  @Input() id: string = "txtArea1";
  @Input() label: string = "Website";
  @Input() backLabel: string = "";
  @Input() placeholder: string = "";
  @Input() isResizable: boolean = false;
  @Input() size: Sizes = Sizes.Normal;
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
  @Input() isRequired: boolean = false;
  @Input() isSubmit: boolean = false;
  @Input() maxLength: number = 5000;
  @Input() minLength: number = 0;
  @Input() pattern: string = "";

  @Output() dataChange = new EventEmitter();
  @Output() endSuccessBtnClick: EventEmitter<object> = new EventEmitter<object>();
  @Output() endFailBtnClick: EventEmitter<object> = new EventEmitter<object>();
  @Output() textboxClick: EventEmitter<object> = new EventEmitter<object>();
  @Output() textboxBlur: EventEmitter<object> = new EventEmitter<object>();
  @Output() textboxFocus: EventEmitter<object> = new EventEmitter<object>();
  @Output() textboxKeydown: EventEmitter<object> = new EventEmitter<object>();
  @Output() textboxKeyup: EventEmitter<object> = new EventEmitter<object>();
  @Output() textboxKeypress: EventEmitter<object> = new EventEmitter<object>();
  @Output() textboxMousedown: EventEmitter<object> = new EventEmitter<object>();
  @Output() textboxMouseup: EventEmitter<object> = new EventEmitter<object>();
  @Output() textboxMouseenter: EventEmitter<object> = new EventEmitter<object>();
  @Output() textboxMouseleave: EventEmitter<object> = new EventEmitter<object>();
  @Output() textboxMouseover: EventEmitter<object> = new EventEmitter<object>();
  @Output() textboxDblClick: EventEmitter<object> = new EventEmitter<object>();

  isValueChng: boolean = false;
  messageShow: string = Messages.Required;
  
  constructor() { }

  ngOnInit() {
  }

  isValidInput(){
    if((this.isValueChng || this.isSubmit) && this.data.length > 0 && this.pattern.length > 0){
      var patt = new RegExp(this.pattern);
      this.messageShow = Messages.pattern;
      return !patt.test(this.data);
    }
    this.messageShow = Messages.Required;
    return (this.isValueChng && this.isRequired && this.data.length === 0) ||
      (this.isSubmit && this.isRequired && this.data.length === 0);
  }

  isValidMinimumInput(){
    return (this.isSubmit && this.minLength > 0 && this.data.length < this.minLength);
  }

  onValueChange(newValue) {
    this.data = newValue;
    this.dataChange.emit(newValue);
    this.isValueChng= true;
  }

  onTextboxClick(event: any){
    this.textboxClick.emit({
      value: this.data,
      event: event
    });
  }

  onTextboxBlur(event: any){
    this.textboxBlur.emit({
      value: this.data,
      event: event
    });
  }

  onTextboxFocus(event: any){
    this.textboxFocus.emit({
      value: this.data,
      event: event
    });
  }

  onTextboxKeydown(event: any){
    this.textboxKeydown.emit({
      value: this.data,
      event: event
    });
  }

  onTextboxKeyup(event: any){
    this.textboxKeyup.emit({
      value: this.data,
      event: event
    });
  }

  onTextboxKeypress(event: any){
    this.textboxKeypress.emit({
      value: this.data,
      event: event
    });
  }

  onTextboxMousedown(event: any){
    this.textboxMousedown.emit({
      value: this.data,
      event: event
    });
  }

  onTextboxMouseup(event: any){
    this.textboxMouseup.emit({
      value: this.data,
      event: event
    });
  }

  onTextboxMouseenter(event: any){
    this.textboxMouseenter.emit({
      value: this.data,
      event: event
    });
  }

  onTextboxMouseleave(event: any){
    this.textboxMouseleave.emit({
      value: this.data,
      event: event
    });
  }

  onTextboxMouseover(event: any){
    this.textboxMouseover.emit({
      value: this.data,
      event: event
    });
  }

  onTextboxDblClick(event: any){
    this.textboxDblClick.emit({
      value: this.data,
      event: event
    });
  }

  onEndSuccessBtnClick(): void {
    this.endSuccessBtnClick.emit({
      value: this.data
    });
  }

  onEndFailBtnClick(): void {
    this.endFailBtnClick.emit({
      value: this.data
    });
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

export enum Messages {
  Required = "Required field",
  pattern = "Invalid value"
}
