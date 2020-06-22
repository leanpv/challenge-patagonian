import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadsService {

  constructor(private http: HttpClient) { }

  getImagenes() {
    return this.http.get(`${environment.url}/files/imagenes`);
  }

  deleteImagen(img: string){
    return this.http.delete(`${environment.url}/files/imagenes/${img}`);
  }

  subirArchivo( archivo: File ) {

    return new Promise( (resolve, reject ) => {

      const formData = new FormData();
      const xhr = new XMLHttpRequest();

      formData.append( 'img', archivo, archivo.name );

      xhr.onreadystatechange = () => {

        if ( xhr.readyState === 4 ) {

          if ( xhr.status === 200 ) {
            console.log( 'Imagen subida' );
            resolve( JSON.parse( xhr.response ) );
          } else {
            console.log( 'Fallo la subida' );
            reject( xhr.response );
          }

        }
      };

      const url = environment.url + '/files/img';

      xhr.open('POST', url, true );
      xhr.send( formData );

    });

  }
}
