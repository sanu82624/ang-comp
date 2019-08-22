import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShowControlsComponent } from './components/show-controls/show-controls.component';

import { ColorPickerComponent } from './controls/color-picker/color-picker.component';
import { SliderComponent } from './controls/slider/slider.component';

import { ColorPickerModule } from 'ngx-color-picker';
import { Ng5SliderModule } from 'ng5-slider';
import { TextboxComponent } from './controls/textbox/textbox.component';
import { ComboboxComponent } from './controls/combobox/combobox.component';
import { NotificationComponent } from './controls/notification/notification.component';
import { ProgressBarComponent } from './controls/progress-bar/progress-bar.component';
import { BadgeComponent } from './controls/badge/badge.component';
import { AccordionComponent } from './controls/accordion/accordion.component';
import { ButtonComponent } from './controls/button/button.component';
import { ModalComponent } from './controls/modal/modal.component';
import { CheckboxComponent } from './controls/checkbox/checkbox.component';

const routes: Routes = [
  { path: '', component: ShowControlsComponent, data: { title: 'Show-component' } }
];

@NgModule({
  declarations: [
    AppComponent,
    ShowControlsComponent,
    ColorPickerComponent,
    SliderComponent,
    TextboxComponent,
    ComboboxComponent,
    NotificationComponent,
    ProgressBarComponent,
    BadgeComponent,
    AccordionComponent,
    ButtonComponent,
    ModalComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ColorPickerModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
