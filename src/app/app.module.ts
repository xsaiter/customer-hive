import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';

import { CoreModule } from './core/core.module';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { WorkspacePanelComponent } from './workspace-panel/workspace-panel.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component'
import { TabService } from './core/services/tab.service';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    WorkspacePanelComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MatFormFieldModule,
    MatTabsModule,
    MatButtonModule
  ],
  providers: [TabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
