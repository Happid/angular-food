import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {GlobalStateService} from '../../../service/global-state-service';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  cartCount = 0;

  constructor(private service: GlobalStateService) {}

  ngOnInit() {
    this.service.cartItems$.subscribe(items => {
      this.cartCount = items.reduce(
        (total, item) => total + (item.addCart || 0),
        0
      );
    });
  }
}
