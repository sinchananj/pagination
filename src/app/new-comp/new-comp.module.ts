import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NewCompRoutingModule } from './new-comp-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NewCompRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class NewCompModule { }
