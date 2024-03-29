import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  empArray:any = [
    {
      id: 1,
      identifire: "",
      tvd1: "",
      ahd: "",
      tvd2: "",
      easting: "",
      northing: "",
      interval_XU: 0,
      interval_PE: 0,
      comments: "",
      isEdit: false
    }
  ];  


}
