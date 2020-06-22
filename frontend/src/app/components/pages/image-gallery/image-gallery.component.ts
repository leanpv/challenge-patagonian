import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UploadsService } from '../../../services/uploads.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  @ViewChild('inputFile') inputFile: ElementRef;

  imagenes: any = [];
  imagenSubir: File;
  imagenTemp: any;

  constructor(private upService: UploadsService, private ruta: Router) {}

  ngOnInit() {
    this.getImagenes();
  }

  getImagenes() {
    this.upService.getImagenes().subscribe(
      res => {
        this.imagenes = res;
      },
      err => console.log(err)
    );
  }

  getImagenData(img, i) {
    this.upService.deleteImagen(img).subscribe(
      res => {
        this.imagenes.splice(i, 1);
        // this.getImagenes();
      },
      err => console.log(err)
    );
  }

  seleccionImagen(archivo: File) {

    if ( !archivo ) {
      this.imagenSubir = null;
      this.inputFile.nativeElement.value = null;
      this.imagenTemp = '';
      return;
    }

    if ( archivo.type.indexOf('image') < 0 ) {
      alert('El archivo seleccionado no es una imagen');
      this.imagenSubir = null;
      return;
    }
    this.imagenSubir = archivo;

    const reader = new FileReader();
    const urlImagenTemp = reader.readAsDataURL( archivo );

    reader.onloadend = () => this.imagenTemp = reader.result;
  }

  agregarImagen() {
    this.upService.subirArchivo(this.imagenSubir)
      .then( (resp: any) => {
        this.inputFile.nativeElement.value = null;
        this.imagenTemp = '';
        this.getImagenes();
      })
      .catch( resp => {
        console.log( 'err: ', resp );
      });
  }
}
