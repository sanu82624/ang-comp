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
// import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION,
//   PB_DIRECTION, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { TextboxComponent } from './controls/textbox/textbox.component';
import { ComboboxComponent } from './controls/combobox/combobox.component';
import { NotificationComponent } from './controls/notification/notification.component';
import { ProgressBarComponent } from './controls/progress-bar/progress-bar.component';
import { BadgeComponent } from './controls/badge/badge.component';
import { AccordionComponent } from './controls/accordion/accordion.component';
import { ButtonComponent } from './controls/button/button.component';
import { ModalComponent } from './controls/modal/modal.component';
import { CheckboxComponent } from './controls/checkbox/checkbox.component';
import { LoginComponent } from './components/login/login.component';
import { TextareaComponent } from './controls/textarea/textarea.component';
import { PopoverComponent } from './controls/popover/popover.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TreeViewComponent } from './controls/tree-view/tree-view.component';
import { LoaderComponent } from './controls/loader/loader.component';
import { ExpressionValidtorComponent } from './components/expression-validtor/expression-validtor.component';

const routes: Routes = [
  { path: '', component: ShowControlsComponent, data: { title: 'Show-component' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login-component' } },
  { path: 'exp', component: ExpressionValidtorComponent, data: { title: 'app-expression-validtor' } }
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
    CheckboxComponent,
    LoginComponent,
    TextareaComponent,
    PopoverComponent,
    TreeViewComponent,
    LoaderComponent,
    ExpressionValidtorComponent,
    // NgxUiLoaderModule, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ColorPickerModule,
    Ng5SliderModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
