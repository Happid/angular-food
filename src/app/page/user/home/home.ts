import {Component, OnInit, signal} from '@angular/core';
import { Hero } from './hero/hero';
import {ApiService} from '../../../service/api-service';
import {UpperCasePipe} from '@angular/common';
import {TruncatePipe} from '../../../shared/pipe/truncate-pipe';
import {FoodStateService} from '../../../service/food-state-service';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    UpperCasePipe,
    TruncatePipe
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  protected readonly Array = Array;

  constructor(
    private service: ApiService,
    private state: FoodStateService,
  ) {}

  ngOnInit(): void {
    if (this.state.categories().length === 0) {
      this.loadCategoryFoods();
    }

    if (this.state.oneCategory().length === 0) {
      this.loadOneCategory();
    }
  }

  loadCategoryFoods() {
    this.service.getAllCategoryFood().subscribe({
      next: (res: any) => {
        this.state.categories.set(res.categories);
      },
      error: (err:any) => console.error(err)
    });
  }

  loadOneCategory() {
    this.service.getFoodByCategory().subscribe({
      next: (res: any) => {
        const name = Object.keys(res)[0];
        this.state.nameOneCategory.set(name);
        this.state.oneCategory.set(res[name] ?? []);
      },
      error: (err:any) => console.error(err)
    });
  }

  // getter agar template bersih
  get categories() {
    return this.state.categories();
  }

  get oneCategory() {
    return this.state.oneCategory();
  }

  get nameOneCategory() {
    return this.state.nameOneCategory();
  }
}
