import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {IByOneCategory, ICategory} from '../model/category.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private baseUrl = '/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getAllCategoryFood(): Observable<ICategory[]> {
    const url = `${this.baseUrl}/categories.php`;

    return this.http.get<ICategory[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getFoodByCategory(categoryName: string = "Beef"): Observable<IByOneCategory[]> {
    const url = `${this.baseUrl}/filter.php?c=${categoryName}`;

    return this.http.get<IByOneCategory[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getAllProduct(): Observable<any> {
    return this.http.get('/mock/allproduct.json');
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);

    let errorMessage = 'Terjadi kesalahan pada server.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client error: ${error.error.message}`;
    }

    return throwError(() => errorMessage);
  }

}
