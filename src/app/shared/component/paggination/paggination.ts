import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-paggination',
  imports: [
    NgClass
  ],
  templateUrl: './paggination.html',
  styleUrl: './paggination.css',
})
export class Paggination {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;

  @Output() pageChange = new EventEmitter<number>();

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }

}
