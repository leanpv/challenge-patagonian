import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageGalleryComponent } from './components/pages/image-gallery/image-gallery.component';
import { PersonalContentComponent } from './components/pages/personal-content/personal-content.component';
import { ProductsComponent } from './components/pages/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/usuario', pathMatch: 'full'},
  { path: 'galeria', component: ImageGalleryComponent },
  { path: 'usuario', component: PersonalContentComponent },
  { path: 'productos', component: ProductsComponent },
  { path: '**', redirectTo: '/usuario' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
