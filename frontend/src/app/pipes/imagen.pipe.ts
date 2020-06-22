import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( img: string ): any {

    const url = environment.url + '/uploads/';

    if ( !img ) {
      // imagen random tipo noimage
      return 'https://uss.com.ar/corporativo/wp-content/themes/consultix/images/no-image-found-360x260.png';
    } else {
      return url + img;
    }
  }
}