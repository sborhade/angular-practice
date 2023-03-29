import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent {

  product: Product | undefined;

  constructor(private route: ActivatedRoute)
  {
    // first get the product id from current route
    const routeParams  = this.route.snapshot.paramMap;
    const productIdfromRoute = Number(routeParams.get('productId'));

    // Find the product that corresponds with the id provided in the route.
      this.product = products.find(product => this.product?.id === productIdfromRoute);

  }

}
