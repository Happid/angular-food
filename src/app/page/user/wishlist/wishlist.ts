import {Component, OnInit} from '@angular/core';
import {Breadcrumb} from '../../../shared/component/breadcrumb/breadcrumb';
import {GlobalStateService} from '../../../service/global-state-service';
import {TruncatePipe} from '../../../shared/pipe/truncate-pipe';
import {CurrencyPipe} from '@angular/common';
import {LoveOrNot} from '../../../shared/component/love-or-not/love-or-not';
import {Product} from '../product/product';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-wishlist',
  imports: [
    Breadcrumb,
    TruncatePipe,
    CurrencyPipe,
    LoveOrNot,
    RouterLink
  ],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist implements OnInit {
    allProducts: any[] = [];

    constructor(
      private cartService: GlobalStateService) {}

    ngOnInit() {
      this.cartService.productItems$.subscribe(
        items => {
          this.allProducts = items;
        }
      );
    }

    get wishlistProducts(){
      return this.allProducts.filter(item => item.wishlist === true);
    }

  updateWishlistStatus(product: any) {
    const index = this.allProducts.findIndex(p => p.idMeal === product.idMeal);

    if (index !== -1) {
      this.allProducts[index] = {
        ...this.allProducts[index],
        wishlist: !product.wishlist,
      };

      this.cartService.updateWishlistProduct(this.allProducts);
    }
  }

  addCart(product: any) {
    this.cartService.addToCart(product);
  }

}
