import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastrModule } from 'ngx-toastr';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'primeng/chart';
import { ClipboardModule } from 'ngx-clipboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ExcelSheetComponent } from './Components/excel-sheet/excel-sheet.component';
import { EmployeeFormComponent } from './Components/employee-form/employee-form.component';





@NgModule({
  declarations: [
    AppComponent,
    ExcelSheetComponent,
    EmployeeFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    InputMaskModule,
    CardModule,
    ToastModule,
    MessagesModule,
    TableModule,
    DialogModule,
    InputTextareaModule,
    InputNumberModule,
    HttpClientModule,
    ChartModule,
    ClipboardModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule 
  ],
  providers: [MessagesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
