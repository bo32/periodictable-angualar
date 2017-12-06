import { ModalElementComponent } from './../modal-element/modal-element.component';
import { HttpService } from '../http.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Directive } from '@angular/core/src/metadata/directives';
import { Event } from '_debugger';

// @Directive({
//   selector: '[element]',
//   exportAs: 'element'
// })
// export class ElementDirective {
//   @Input() element: any;
// }


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @ViewChild(ModalElementComponent) modalDialog: ModalElementComponent;
  @ViewChild('modalElementHeader') modalDialogHeader: ElementRef;
  @ViewChild('modalElementBody') modalDialogBody: ElementRef;

  constructor(private httpService: HttpService) { }

  private periods = [];
  private actinideSerie = [];
  private lanthanideSerie = [];
  private groups = [];
  // private elements = [];
  // private rows: any[];
  private description: string;
  // private modalDialog: ModalElementComponent;

  private emptyElement = {
    'symbol': '',
    'metal': {
      'metalId': ''
    },
    'state': {
      'stateId': ''
    }
  };

  ngOnInit() {

    this.httpService.getTable().subscribe(
      data => {
        console.log(data);
        
        var index = 0;
        var countElements = data.elements.length;
        var emptyElement = {
          'symbol': '',
          'name': '',
          'atomicNumber': '',
          'group': { 'index': '' },
          'period': { 'index': '' },
          'metal': { 'metalId': '' },
          'state': { 'stateId': '' }
        };
        while(index < countElements) {
          var period = {'index': '', 'elements': []};
          for (var i = 1; i < 19; i++) {
            var curElem = data.elements[index];
            if (curElem.atomicNumber != null && curElem.atomicNumber >= 57 && curElem.atomicNumber <= 71) {
              this.lanthanideSerie.push(curElem);
              index++;
              i--;
            } else if (curElem.atomicNumber != null && curElem.atomicNumber >= 89 && curElem.atomicNumber <= 103) {
              this.actinideSerie.push(curElem);
              index++;
              i--;
            } else {
              if (curElem.group.index === i) {
                period.index = curElem.period.index;
                period.elements.push(curElem);
                index++;
              } else {
                period.elements.push(emptyElement);
              }
            }
          }
          this.periods.push(period);
        }

        this.description = data.description;
      }
    );

    this.httpService.getGroups().subscribe(
      data => {
        for (var g of data) {
          this.groups.push(g);
        }
      }
    );

  }


  onSelectedElement(elementName) {
    this.httpService.getOneElement(elementName).subscribe(
      data => {
        this.displayElement(data);
      }
    );
  }

  displayElement(element) {
    console.log(element);
  }



  displayModal(event) {
    console.log(event);
    console.log(this.modalDialog);
    this.modalDialogHeader.nativeElement.text = event.name;
    this.modalDialogBody.nativeElement.text = event.name;
    this.modalDialog.show(event);
  }

  getPeriodClass() {
    return '';
  }

  getGroupClass() {
    return '';
  }



}
