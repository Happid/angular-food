import {Injectable, signal} from '@angular/core';
import {ApiService} from './api-service';
import {IByOneCategory, ICategories} from '../model/category.interface';

@Injectable({
  providedIn: 'root',
})
export class FoodStateService {
  categories = signal<ICategories[]>([]);
  oneCategory = signal<IByOneCategory[]>([]);
  nameOneCategory = signal<string>('');
}
