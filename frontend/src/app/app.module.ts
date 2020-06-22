import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PersonalContentComponent } from './components/pages/personal-content/personal-content.component';
import { ImageGalleryComponent } from './components/pages/image-gallery/image-gallery.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatSelectModule  } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ImagenPipe } from './pipes/imagen.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    PersonalContentComponent,
    ImageGalleryComponent,
    ProductsComponent,
    ImagenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
