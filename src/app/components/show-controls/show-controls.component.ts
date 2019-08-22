import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-controls',
  templateUrl: './show-controls.component.html',
  styleUrls: ['./show-controls.component.scss']
})
export class ShowControlsComponent implements OnInit {

  //color-picker
  isOkButtonShow: boolean = true;

  //slider
  isFocusMinValue: boolean = false;

  placeholder: string = "user name";

  inputTextData:string = "";

  isSubmit: boolean = false;
  pBarVal: number = 30;

  constructor() {
    
  }

  ngOnInit() {
  }

  onUserChangeStart(sliderObject: any){
    
  }

  onSubmitClick(){
    //this.isSubmit = true;
    this.pBarVal = 20;
  }
}
