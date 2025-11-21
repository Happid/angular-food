import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
          import('./page/user/layout-user').then(m => m.LayoutUser),
    
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
    
          {
            path: 'home',
            loadComponent: () =>
              import('./page/user/home/home').then(m => m.Home)
          },
          {
            path: 'product',
            loadComponent: () =>
              import('./page/user/product/product').then(m => m.Product)
          },
          {
            path: 'product/:id',
            loadComponent: () =>
              import('./page/user/product/detail-product/detail-product').then(m => m.DetailProduct)
          },
          {
            path: 'cart',
            loadComponent: () =>
              import('./page/user/cart/cart').then(m => m.Cart)
          },
          {
            path: 'wishlist',
            loadComponent: () =>
              import('./page/user/wishlist/wishlist').then(m => m.Wishlist)
          }
        ]
      },
    
      // ===== ADMIN AREA =====
      // {
      //   path: 'admin',
      //   loadComponent: () =>
      //     import('./page/admin/layout-admin').then(m => m.LayoutAdmin),
      //
      //   children: [
      //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      //
      //     {
      //       path: 'dashboard',
      //       loadComponent: () =>
      //         import('./page/admin/dashboard/dashboard')
      //           .then(m => m.Dashboard)
      //     },
      //   ]
      // }
];
