import crypto from 'crypto';
import multer from 'multer';


export const multerConfig = (pathImage: string) => {
    return {

        dest: pathImage,
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, pathImage);
            },
            filename: function (req, file, cb) {
                cb(null, crypto.randomBytes(10).toString('hex') + "." + file.mimetype.replace('image/', ''));
            },
        }),
        limits: {
            fileSize: 2 * 1024 * 1024,
        },
        fileFilter: function (req, file, cb: any) {
            const allowedMimes = [
                'image/jpeg',
                'image/pjpeg',
                'image/png',
                'image/png',
            ];
            if (allowedMimes.includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb('Formato inválido', false);
            }
        }
    }
}

