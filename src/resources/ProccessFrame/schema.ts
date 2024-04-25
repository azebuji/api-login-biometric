/*import { Attendant, Login, Sector } from '@prisma/client';
import Joi from 'joi';

import { NewAttendant } from './inteface';

export const createAttendant = Joi.object<NewAttendant>({
    sector: Joi.string().empty("").custom((val) => {
        if (!Object.keys(Sector).includes(val)) {
            return
        }
        return val
    }),
    login: Joi.object<Login>({
        name: Joi.string().required(),
        fkCompany: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    })
})
*/