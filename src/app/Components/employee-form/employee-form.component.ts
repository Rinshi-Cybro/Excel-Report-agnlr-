import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private empService: EmployeeService, private toastMsg: ToastrService,
    private router: Router){ }


  // employeeArray:any = {
  //   identifire: "",
  //   tvd1: "",
  //   ahd: "",
  //   tvd2: "",
  //   easting: "",
  //   northing: "",
  //   interval: "",
  //   comments: ""
  // }

  ngOnInit(): void {
    
  }


  // onSubmit(){

  //   this.empService.postEmployee(this.employeeArray).subscribe((res:any)=>{
  //     console.log(res);
  //     this.toastMsg.success("Successfully submitted !!", 'success')
  //     this.router.navigate(['emp-excel-table'])
  //     console.log(this.employeeArray);
  //   })

  // }


  // selectNode(node: Node){
  //   let range  =  document.createRange();
  //   range.selectNodeContents(node)
  //   let select =  window.getSelection()
  //   select!.removeAllRanges()
  //   select!.addRange(range)
  // }

  // copyTextClipboard(){
  //   if (!this.empArray || !this.someObject.nativeElement) {
  //     console.error('Error: someObject or nativeElement is undefined.');
  //     return;
  //   }
  //   this.selectNode(this.queryTable.nativeElement);
  //   document.execCommand('copy'); 
  // }


}
