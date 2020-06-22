import { Component, OnInit } from '@angular/core';
import * as productos from '../../../../assets/productos.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  prods: any;

  constructor() { }

  ngOnInit() {
    this.prods = productos;
  }

}
