import { Router } from 'express';
import { filesController } from '../controllers/filesController';

class AreasRoutes {

    // Creamos una propiedad llamada: router y la inicializamos
    public router: Router = Router();

    // El constructor ejecutará un método llamado: config
    constructor() {
        this.config();
    }

    // Config utiliza la propiedad router y a partir de ella definiremos las rutas
    config(): void {
        // rutas de imagenes
        this.router.delete('/imagenes/:img', filesController.deleteImagen);
        this.router.get('/imagenes', filesController.getImagenes);
        this.router.post('/img', filesController.updateImage);
    }
}

const filesRoutes = new AreasRoutes();
export default filesRoutes.router;
