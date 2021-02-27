import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  datas: any;

  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.productservice.getAll().subscribe((datas)=>{
      this.datas=datas;
    });
  }

}
