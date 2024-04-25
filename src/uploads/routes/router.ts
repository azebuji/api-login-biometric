import express from 'express';
import path from 'path';

const router = express.Router();

//verifyTokenLogin(router);

router.use('/photos', express.static(path.resolve(__dirname, '..', '..', 'uploads', 'photos')));

router.use('/sounds', express.static(path.resolve(__dirname, '..', '..', 'uploads', 'files', 'sounds')));

export default router;
