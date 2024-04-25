import express from 'express';

import * as processFrameController from './controller';
import multer from 'multer';
import { multerConfig } from '../../config/multer';
import path from 'path';

//const uploadAttendant = multer(multerConfig(path.resolve(__dirname, '..', '..', 'uploads', 'photos'))).single('image-photo');

const router = express.Router();


export default router;