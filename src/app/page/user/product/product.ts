import {Component, OnInit} from '@angular/core';
import {Paggination} from '../../../shared/component/paggination/paggination';
import {CurrencyPipe} from '@angular/common';
import {LocalstorageService} from '../../../service/localstorage-service';
import {LoveOrNot} from '../../../shared/component/love-or-not/love-or-not';
import {GlobalStateService} from '../../../service/global-state-service';

@Component({
  selector: 'app-product',
  imports: [
    CurrencyPipe,
    LoveOrNot,
  ],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {

  protected readonly Array = Array;

  products: any[] = [];

  constructor(
    private ls: LocalstorageService,
    private cartService: GlobalStateService
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(): void {
    this.cartService.productItems$.subscribe(
      items => {
        this.products = items;
      }
    );
  }

  updateWishlistStatus(product: any) {
    const index = this.products.findIndex(p => p.idMeal === product.idMeal);

    if (index !== -1) {
      this.products[index] = {
        ...this.products[index],
        wishlist: !product.wishlist,
      };

      this.cartService.updateWishlistProduct(this.products);
    }
  }

  addCart(product: any) {
    this.cartService.addToCart(product);
  }

}
