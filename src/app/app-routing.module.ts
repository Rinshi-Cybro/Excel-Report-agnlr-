import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelSheetComponent } from './Components/excel-sheet/excel-sheet.component';
import { EmployeeFormComponent } from './Components/employee-form/employee-form.component';

const routes: Routes = [
  // { path:'', component: EmployeeFormComponent },
  { path:'emp-excel-table', component: ExcelSheetComponent },
  { path:'',redirectTo:'emp-excel-table',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
