import { Component } from '@angular/core';

import { products } from './products';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio1';
  products = products;

  showModal = false;

  toggleDisplay() {
    this.showModal = !this.showModal;
  }
}
