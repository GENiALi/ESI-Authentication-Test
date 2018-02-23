import { Component, Input } from '@angular/core';

/**
 * Generated class for the FleetListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fleet-list',
  templateUrl: 'fleet-list.html'
})
export class FleetListComponent {

  @Input('wings') Wings;
  @Input('members') Members;

  //displayTree: [];

  constructor() {
    console.log('Hello FleetListComponent Component');
    //this.text = 'Hello World';
  }

}
