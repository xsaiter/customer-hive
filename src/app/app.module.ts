import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

import { CoreModule } from './core/core.module';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { WorkspacePanelComponent } from './workspace-panel/workspace-panel.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component'
import { TabService } from './core/services/tab.service';
import { CustomerService } from './core/services/customer.service';
import { AllCustomersComponent } from './all-customers/all-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    WorkspacePanelComponent,
    EditCustomerComponent,
    AllCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MatFormFieldModule,
    MatTabsModule,
    MatButtonModule,
    MatTableModule,
    FormsModule
  ],
  providers: [TabService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
