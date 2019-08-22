import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Animations } from './animations';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [Animations]
})
export class NotificationComponent implements OnInit, AfterViewInit {

  @Input() type: NotificationTypes = NotificationTypes.SUCCESS;
  @Input() message: string = "<strong>Success!</strong> Indicates a successful or positive action.";
  @Input() position: NotificationPositions = NotificationPositions.TOP_RIGHT;
  @Input() autoCloseInSecond: number = 0;

  @Output() closeNotificationClick: EventEmitter<object> = new EventEmitter<object>();

  private autoCloseSubscription: Subscription;
  appearanceState: string = 'fade';

  constructor() { }

  isAlertClose: boolean = false;

  ngOnInit() {
    if(this.autoCloseInSecond > 0){
      this.autoCloseSubscription = interval(this.autoCloseInSecond*1000).subscribe(
        (val) => { this.onCloseAlertClick()}
      );
    }
  }

  ngAfterViewInit(){
    document.getElementById('msg').innerHTML = this.message;
    setTimeout(() => {
      this.appearanceState = "show";
    }, 1);
  }

  onCloseAlertClick(event: any = null){
    if(event === null){
      this.autoCloseSubscription.unsubscribe();
    }
    this.closeNotificationClick.emit({
      event: event
    });
    this.appearanceState = "fade";
    setTimeout(() => {
      this.isAlertClose = true;
    }, 1600);
  }
}

export enum NotificationTypes {
  SUCCESS = "alert-success",
  INFO = "alert-info",
  WARNING = "alert-warning",
  DANGER = "alert-danger",
  PRIMARY = "alert-primary",
  SECONDARY = "alert-secondary",
  DARK = "alert-dark",
  LIGHT = "alert-light"
}

export enum NotificationPositions {
  TOP = "alert-position-top",
  BOTTOM = "alert-position-bottom",
  BOTTOM_RIGHT = "alert-position-bottom-right",
  BOTTOM_LEFT = "alert-position-bottom-left",
  TOP_LEFT = "alert-position-top-left",
  TOP_RIGHT = "alert-position-top-right"
}
