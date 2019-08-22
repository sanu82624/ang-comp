//npm install ngx-color-picker --save

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

    @Input() color: string = "#ffffff"; // any pre defined color in hex mode
    @Input() colorValueShowMode: string = "both"; // both | background | text
    @Input() isColorCodeShow: boolean = true; // true | false
    @Input() colorCodeFormat: string = "hex"; // hex | rgba | hsla
    @Input() colorMode: string = "color"; // color | grayscale | presets

    @Input() panelDialogType: string = "popup"; // popup | inline
    @Input() isPanelDialogFixed: boolean = false; // false | true >> depends on panelDialogType=inline
    @Input() panelPosition: string = "right"; // right | left | top | bottom
    @Input() panelWidth: string = "300px"; // px | auto
    @Input() panelHeight: string = "auto"; // px | auto

    @Input() isOkButtonShow: boolean = true; // false | true
    @Input() okButtonText: string = "OK";
    @Input() oKButtonClass: string = ""; // put class name

    @Input() isCancelButtonShow: boolean = true; // false | true
    @Input() cancelButtonText: string = "Cancel";
    @Input() cancelButtonClass: string = ""; // put class name

    @Input() presetColors: Array<string> = []; // >> color code array in hex mode like #ffffff
    @Input() presetLabelText: string = "Preset Color";
    @Input() maxPresetColorBtnNumber: number = 7; // 0 - any number
    @Input() isAddPresetColorButtonShow: boolean = true; // false | true
    @Input() addColorButtonText: string = "Add color";
    @Input() addColorButtonClass: string = ""; // put class name
    @Input() emptyPresetColorMsg: string = "No Prest color";
    @Input() removeColorButtonClass: string = ""; // put class name

    @Input() alphaChannel: string = "enabled"; // enabled | disabled | always
    
    @Output() colorPickerChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() colorPickerOkClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() dialogOpenedOrClosed: EventEmitter<any> = new EventEmitter<any>();
    @Output() presetColorsChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() inputChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() sliderChanged: EventEmitter<any> = new EventEmitter<any>();
    
    ngModel: string = this.color;
    backgroundColor: string = this.color;

  constructor() { }

  ngOnInit() {
    this.onColorPickerChange();
  }

  onColorPickerChange(){
    switch(this.colorValueShowMode){
        case "background":
            this.ngModel = "";
            this.backgroundColor = this.color;
            break;
        case "text":
            this.ngModel = this.color;
            this.backgroundColor = "";
            break;
        default:
            this.ngModel = this.color;
            this.backgroundColor = this.color;
            break;
    }
    this.colorPickerChanged.emit({
        color: this.color
    });
  }

  onColorPickerOkClick(value: string){
      this.colorPickerOkClicked.emit({
          color: value
      });
  }

  onDialogOpenClose(open: boolean){
      this.dialogOpenedOrClosed.emit({
          isOpen: open
      });
  }

  onPresetColorsChange(value: any){
    this.presetColorsChanged.emit({
      presetColors: value
    });
  }

  onInputChange(input: string, value: any, color: string){
    this.inputChanged.emit({
      input: input,
      value: value,
      color: color
    });
  }

  onSliderChange(name: string, value: any){
    this.sliderChanged.emit({
      name: name,
      value: value
    });
  }
}
