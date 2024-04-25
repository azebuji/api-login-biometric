export type MulterExpress = Express.Multer.File[] | { [fieldname: string]: Express.Multer.File[]; } | undefined

