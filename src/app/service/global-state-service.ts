import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  private productItemsSubject = new BehaviorSubject<any[]>([]);
  productItems$ = this.productItemsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.checkStoreProduct();
    this.checkStoreCart();
  }

  checkStoreProduct(){
    const stored = localStorage.getItem('products');
    if (stored) {
      this.productItemsSubject.next(JSON.parse(stored));
    }else{
      this.loadProducts();
    }
  }

  getAllProduct(): Observable<any> {
    return this.http.get('/mock/allproduct.json');
  }

  loadProducts() {
    this.getAllProduct().subscribe({
      next: (data:any) => {
        localStorage.setItem('products', JSON.stringify(data));
        this.productItemsSubject.next(data);
      },
      error: (err:any) => console.error(err)
    });
  }

  updateWishlistProduct(product: any[]) {
    this.productItemsSubject.next(product);
    localStorage.setItem('products', JSON.stringify(product));
  }

  getProduct() {
    return this.productItemsSubject.value;
  }

  // ======= CART STORE
  checkStoreCart(){
    const stored = localStorage.getItem('cart');
    if (stored) {
      this.cartItemsSubject.next(JSON.parse(stored));
    }
  }

  getCart() {
    return this.cartItemsSubject.value;
  }

  private save(cart: any[]) {
    this.cartItemsSubject.next(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  addToCart(product: any) {
    const cart = this.cartItemsSubject.value;

    // Check product
    const index = cart.findIndex(item => item.strMeal === product.strMeal);

    if (index !== -1) {
      const updated = [...cart];
      const currentQty = updated[index].addCart ?? 1;

      updated[index] = {
        ...updated[index],
        addCart: currentQty + 1
      };

      this.save(updated);
      return;
    }

    const newProduct = {
      ...product,
      addCart: 1
    };

    this.save([...cart, newProduct]);
  }

  decreaseFromCart(product: any) {
    const cart = this.cartItemsSubject.value;

    // Cari produk
    const index = cart.findIndex(item => item.strMeal === product.strMeal);

    if (index === -1) return; // tidak ada di cart

    const updated = [...cart];
    const currentQty = updated[index].addCart ?? 1;

    if (currentQty > 1) {
      // Kurangi qty
      updated[index] = {
        ...updated[index],
        addCart: currentQty - 1
      };
    } else {
      // Jika qty jadi 0 → hapus item
      updated.splice(index, 1);
    }

    this.save(updated);
  }


  removeFromCart(id: number) {
    const updated = this.getCart().filter(p => p.id !== id);
    this.cartItemsSubject.next(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  }

}
