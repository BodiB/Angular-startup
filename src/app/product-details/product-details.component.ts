import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Product added to cart.');
  }

  ngOnInit() {
    // Get the product id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product corresponding to the id from the route
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}
