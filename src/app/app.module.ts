import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterViewComponent } from './master-view/master-view.component';
import { IgxIconModule, IgxSwitchModule, IgxChipsModule, IgxAvatarModule, IgxSliderModule, IgxButtonModule, IgxRippleModule, IgxRadioModule, IgxButtonGroupModule, IgxInputGroupModule, IgxCheckboxModule, IgxCalendarModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MasterViewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxIconModule,
    IgxSwitchModule,
    IgxChipsModule,
    IgxAvatarModule,
    IgxSliderModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxRadioModule,
    IgxButtonGroupModule,
    IgxInputGroupModule,
    IgxCheckboxModule,
    IgxCalendarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
