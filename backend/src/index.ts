import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import filesRoutes from './routes/filesRoutes';

import fileUpload from "express-fileupload";
import serveIndex from "serve-index";

class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    // Método que configura las propiedades de app
    config(): void {
        // process.env.PORT (si hay un puerto definido.... Tómalo sin toma el 3000)
        this.app.set('port', process.env.PORT || 3000); 
        this.app.use(morgan('dev')); // Con morgan vemos las peticiones que hace el Cliente
        this.app.use(cors()); // Con cors podemos pedir datos al servidor
        this.app.use(express.json()); // express define que debe aceptar formatos json de app Cliente
        this.app.use(express.urlencoded({extended: false})); // Para enviar información desde un form HTML
        this.app.use(fileUpload());
    }

    // Método que definine las rutas de los servidores
    routes(): void {
        // serveIndex declara publica la ruta que accede a la carpeta uploads, donde se ubican las imagenes
        this.app.use('/uploads', express.static('./src/uploads/'), serveIndex('./src/uploads/', {'icons': true}))
        this.app.use('/', indexRoutes);
        
        this.app.use('/files', filesRoutes);
        
    }

    // Método que inicializa el servidor para entrar en modo Escucha
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

// Instanciamos la clase Server
const SERVER = new Server();
SERVER.start();