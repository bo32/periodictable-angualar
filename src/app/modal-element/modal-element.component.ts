import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-element',
  templateUrl: './modal-element.component.html',
  styleUrls: ['./modal-element.component.css', '../app.component.css']
})
export class ModalElementComponent implements OnInit {

  constructor() { }

  private curElement:any = {
    group: {index:'', name: ''},
    period: {index:'', name: ''},
    atomicMass: '',
    atomicNumber: '',
    name: '',
    metal: {
      metalId: ''
    }
  };

  ngOnInit() {
  }

  public visible = false;
  private visibleAnimate = false;

  public show(element): void {
    this.curElement = element;
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

  public getCellStyle() {
    var tmp = '';
    switch (this.curElement.metal.metalId) {
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

  getGroupName() {
    return this.firstToUpperCase(this.curElement.group.name);
  }

  firstToUpperCase(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
  }
  
}
