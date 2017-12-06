import { HttpService } from './../http.service';
import { Component, OnInit, Input, ElementRef, Output } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';
import { EventEmitter } from '@angular/common/src/facade/async';
// import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css', '../app.component.css']
})
export class ElementComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  @Input() private element: any;

  ngOnInit() {
  }

  // getElement() {
  //   this.httpService.getElementByGroupIdAndPeriodId(this.groupId, this.periodId).subscribe(
  //     data => {
  //       console.log(data);
  //       this.element.name = data.name;
  //     },
  //     error => console.error(error)
  //   );
  // }

  // onGetElement() {
  //   this.httpService.getOneElement('hydrogen').subscribe(
  //     data => {
  //       console.log(data);
  //       this.element.name = data.name;
  //     },
  //     error => console.error(error)
  //   );
  // }

  // @ViewChild('modalElement') modalDialog: ElementRef;
  // @ViewChild('modalElementHeader') modalElementHeader: ElementRef;

  @Output() onClicked = new EventEmitter();

  onSelectedElement() {
    console.log(this.element);
    // this.modalDialog.nativeElement.show();
    // this.modalElementHeader.nativeElement.value = 'kjkjlkjlkjlkj';
    this.onClicked.emit(this.element);
  }

  getCellStyle() {
    var tmp = '';
    if (this.element.symbol !== '') {
      tmp += 'periodic-cell ';
    }

    switch (this.element.state.stateId) {
      case 1:
        tmp += 'solid ';
        break;
      case 2:
        tmp += 'gas ';
        break;
      case 3:
        tmp += 'synthetic ';
        break;
      case 4:
        tmp += 'liquid ';
        break;
    }

    switch (this.element.metal.metalId) {
      case 1:
        tmp += 'basicmetal';
        break;
      case 2:
        tmp += 'alkalimetal';
        break;
      case 3:
        tmp += 'alkalineearthmetal';
        break;
      case 4:
        tmp += 'transitionmetal';
        break;
      case 5:
        tmp += 'lanthanide';
        break;
      case 6:
        tmp += 'aclinide';
        break;
      case 7:
        tmp += 'seminmetal';
        break;
      case 8:
        tmp += 'nonmetal';
        break;
      case 9:
        tmp += 'chalcogens';
        break;
      case 10:
        tmp += 'halogens';
        break;
      case 11:
        tmp += 'noblegas';
        break;
    }

    return tmp;
  }

}
