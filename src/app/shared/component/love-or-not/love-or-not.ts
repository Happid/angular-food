import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-love-or-not',
  imports: [],
  templateUrl: './love-or-not.html',
  styleUrl: './love-or-not.css',
})
export class LoveOrNot {
  @Input() wishlist!: boolean;
}
