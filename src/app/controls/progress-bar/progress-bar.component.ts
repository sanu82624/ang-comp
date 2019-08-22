import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() value: number = 0;
  @Input() isLabelShow: boolean = false;
  @Input() height: number = 13;
  @Input() type: ProgressBarType = ProgressBarType.SUCCESS;
  @Input() isStripedBar: boolean = true;
  @Input() isAnimatedBar: boolean = true; // depends on isStripedBar=true

  constructor() { }

  ngOnInit() {
  }

  getBarClass(){
    if(this.isStripedBar){
      if(this.isAnimatedBar){
        return "progress-bar-striped progress-bar-animated " + this.type;
      }
      return "progress-bar-striped " + this.type;
    }
    return this.type;
  }

}

export enum ProgressBarType {
  NORMAL = "",
  SUCCESS = "bg-success",
  INFO = "bg-info",
  WARNING = "bg-warning",
  DANGER = "bg-danger"
}
