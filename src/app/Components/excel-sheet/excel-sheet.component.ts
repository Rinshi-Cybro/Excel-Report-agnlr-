import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Data, Router } from '@angular/router';
import { Table } from 'primeng/table';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/services/employee.service';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-excel-sheet',
  templateUrl: './excel-sheet.component.html',
  styleUrls: ['./excel-sheet.component.css']
})
export class ExcelSheetComponent implements OnInit {

  // text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  constructor(private empService: EmployeeService, private clipboardService: ClipboardService, private toastrService: ToastrService) {
    this.toastMsg = this.toastrService;
  }


  // copyContent() {
  //   this.clipboardService.copyFromContent(this.text);
  //   this.toastMsg.success('Text successfully copyed!', 'Success');
  //   console.log(this.text);
  // }

  copyTextClipboard() {
  }


  toastMsg: any;
  sidebarVisible: boolean = false;
  oldUserItem: any;
  loading: boolean = true;
  basicData: any;

  empArray = [
    {
      id: 1,
      identifire: "Maching",
      tvd1: "34",
      ahd: "40",
      tvd2: "20",
      easting: "20 Easting",
      northing: "52 northing",
      interval_XU: 55,
      interval_PE: 65,
      comments: "Comment 1",
      isEdit: false

    },
    {
      id: 2,
      identifire: "Checking",
      tvd1: "57",
      ahd: "34",
      tvd2: "23",
      easting: "45 easting",
      northing: "32 northing",
      interval_XU: 45,
      interval_PE: 35,
      comments: "Add new - comment",
      isEdit: false

    },
    {
      id: 3,
      identifire: "Testing",
      tvd1: "22",
      ahd: "43",
      tvd2: "54",
      easting: "64 Easting",
      northing: "32 northing",
      interval_XU: 35,
      interval_PE: 45,
      comments: "Re-placing - comment",
      isEdit: false
    }
  ];

  ngOnInit(): void {
    this.basicData = {
      labels: this.empArray.map((record: any) => `empArray ${record.id}`),
      datasets: [{
        label: 'TVD [SS]',
        data: this.empArray.map((record: any) => record.tvd1), // Use record.tvd2 here
        backgroundColor: ['green'],
        borderColor: ['black'],
        borderWidth: ['1']
      },
      {
        label: 'AHD [m BDF]',
        data: this.empArray.map((record: any) => record.ahd), // Use record.tvd2 here
        backgroundColor: ['lightblue'],
        borderColor: ['black'],
        borderWidth: ['1']
      }
      ]
    }
  }


  reSetFilter(table: Table) {
    table.clear();
  }


  CopyAndPast(event: ClipboardEvent): void {
    const clipboardData = (event.clipboardData || (window as any).clipboardData);
    const pastData = clipboardData?.getData('text');
    console.log(pastData);

    if (!pastData) {
      return;
    }

    const rows = pastData.split('\n').map((row: string) => row.split('\t'));
    console.log({ rows, pastData });

    const header = rows[0];
    const newData = rows.slice(1).map((row: any[]) => {
      const rowData: any = {};
      row.forEach((value, index) => {
        rowData[header[index].trim()] = value;
      });
      return rowData;
    });

    this.empArray = [...this.empArray, ...newData];
    console.log(this.empArray)
    this.toastMsg.success('Data pasted successfully!', 'Success');
  }


  onEdit(item: any) {
    this.oldUserItem = JSON.stringify(item);
    this.empArray.forEach((element: any) => {
      element.isEdit = false;
    })
    item.isEdit = true;
  }

  onDelete(item: any) {
    this.empArray.splice(item, 1);
    this.toastMsg.success("Successfully deleted !!", 'success')
  }

  onCancel(item: any) {
    const oldUser = JSON.parse(this.oldUserItem);
    item.identifire = oldUser.identifire;
    item.tvd1 = oldUser.tvd1;
    item.ahd = oldUser.ahd;
    item.tvd2 = oldUser.tvd2;
    item.easting = oldUser.easting;
    item.northing = oldUser.northing;
    item.interval_XU = oldUser.interval_XU;
    item.interval_PE = oldUser.interval_PE;
    item.comments = oldUser.comments;
    item.isEdit = false;
  }

  onSave(item: any) {
    item.isEdit = false;
    console.log(item.id);
    console.log(item.identifire);

    this.empArray.forEach((record: any) => {
      if (record.id == item.id) {
        record.identifire = item.identifire;
        record.tvd1 = item.tvd1;
        record.ahd = item.ahd;
        record.tvd2 = item.tvd2;
        record.easting = item.easting;
        record.northing = item.northing;
        record.interval_XU = item.interval_XU;
        record.interval_PE = item.interval_PE;
        record.comments = item.comments
      }
    });
    this.toastMsg.success("Successfully saved", 'success')

  }

  exportToExcel(): void {
    const data = this.empArray.map((record: any) => {
      return {
        id: record.id,
        identifire: record.identifire,
        tvd1: record.tvd1,
        ahd: record.ahd,
        tvd2: record.tvd2,
        easting: record.easting,
        northing: record.northing,
        interval_XU: record.interval_XU,
        interval_PE: record.interval_PE,
        comments: record.comments,
      };
    });
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'exported-data.xlsx');
    this.toastMsg.success("Successfully Export excel", 'success')
  }

  addnewRecord() {
    const obj = {
      id: 4,
      identifire: "",
      tvd1: "",
      ahd: "",
      tvd2: "",
      easting: "",
      northing: "",
      interval_XU: 0,
      interval_PE: 0,
      comments: "",
      isEdit: true,
    };
    this.empArray.unshift(obj)
  }

}



