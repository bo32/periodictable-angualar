import { HttpService } from './http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ElementComponent } from './element/element.component';
import { TableComponent } from './table/table.component';
import { ModalElementComponent } from './modal-element/modal-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    TableComponent,
    ModalElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
