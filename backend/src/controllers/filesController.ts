import { Request, Response } from 'express';
import bd from '../routes/database';
import fs from 'fs';
import { UploadedFile } from 'express-fileupload';


class FilesController {

    public async updateImage(req: Request, res: Response): Promise<any> {

        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send({
                message: 'No se subió un archivo'
            });
        }

        var archivo = req.files.img as UploadedFile;
        var nombreCortado = archivo.name.split('.');
        var extensionArchivo = nombreCortado[nombreCortado.length - 1];
        var extensionesValidas = ['png', 'jpg', 'gif', 'jpeg'];

        if (extensionesValidas.indexOf(extensionArchivo) < 0) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Extension no válida',
                errors: { message: 'Las extensiones válidas son ' + extensionesValidas.join(', ') }
            });
        }

        var nombreArchivo = `${ nombreCortado[0] }-${ new Date().getMilliseconds() }.${ extensionArchivo }`;
        var path = `./src/uploads/${ nombreArchivo }`;

        archivo.mv(path, err => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al mover archivo',
                    path: path,
                    errors: err
                });
            }
        });

        try{
            req.body.imagen = nombreArchivo;
            await bd.query('INSERT INTO imagenes set ?', [req.body]);
            res.json({ message: req.body });
        }catch(err){
            res.json({ error: err.sqlMessage });
        }
    }

    public async getImagenes (req: Request, res: Response): Promise<void> {
        try{
            const dato = await bd.query('SELECT * FROM imagenes');
            res.json(dato);
        }catch(err){
            res.json({ error: err.sqlMessage });
        }
    }

    public async deleteImagen(req: Request, res: Response): Promise<void> {
        const { img } = req.params;
        await bd.query('DELETE FROM imagenes WHERE imagen = ?', [img]);
        var path = `./src/uploads/${ img }`;
        fs.unlinkSync(path);
        res.json({ message: "Imagen eliminada" });
    }


}

export const filesController = new FilesController();
export default filesController;