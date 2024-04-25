import { } from '@prisma/client';

import db from "../../database/helpers/connection";
import { generateHashedPassword } from "../../global/helpers/functions/password";

export async function processFrames() {

}

export async function getStatusAttendant(uuidLogin: string) {
    //return await db.attendant.findFirst({ select: { statusAttendant: true }, where: { Login: { uuidLogin } } })
}

