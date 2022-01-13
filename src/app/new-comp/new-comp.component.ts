import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.scss']
})
export class NewCompComponent implements OnInit {
  message: any;
  forControl: FormGroup
  resultData: any;
  p: any ;
  constructor( private http:HttpClient) {
    this.forControl = new FormGroup({
      testscript: new FormControl(null,),
      hello: new FormControl(null,)
    })
  }
  ngOnInit(): void {
    let number = 1;
   this.displayData(number);
  }
  
  displayData(pageNumber: number){
    let page=1
    this.p= pageNumber;
    this.getDetails(page).subscribe((data:any)=>{
      this.resultData=data.data

      console.log(this.resultData)
    })
  }
  getDetails(page:any){
    return this.http.get('https://test-api-dot-eightfolds.el.r.appspot.com/products/search?page='+page)
  }
  pageChanged(e: number){
   this.displayData(e);
  }
}



