import {Component, OnInit} from '@angular/core';
import {Breadcrumb} from '../../../shared/component/breadcrumb/breadcrumb';
import {RouterLink} from '@angular/router';
import {GlobalStateService} from '../../../service/global-state-service';
import {TruncatePipe} from '../../../shared/pipe/truncate-pipe';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [
    Breadcrumb,
    RouterLink,
    TruncatePipe,
    CurrencyPipe
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {
    cartItems: any[] = [];
    totalCart = 0;

    constructor(private cartService: GlobalStateService) {
    }

    ngOnInit() {
      this.cartService.cartItems$.subscribe(
        items => {
          this.cartItems = items;
          this.totalCart = 0;
          this.cartItems.map(res => {
            this.totalCart += res.addCart;
          })

        }
      );
    }

    addingQty(product: any){
      this.cartService.addToCart(product);
    }

    decreaseQty(product: any){
      this.cartService.decreaseFromCart(product);
    }

    get total(){
      let nominal = 0;
      this.cartItems.map(res => {
        nominal += res.addCart * res.price;
      });

      return nominal;
    }
}
