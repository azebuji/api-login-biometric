import { Prisma, PrismaClient } from "@prisma/client";

import crypto from 'crypto';

import { generateHashedPassword } from '../../../global/helpers/functions/password';

const createMasterAccount = async (db: PrismaClient<Prisma.PrismaClientOptions, never | undefined>) => {
    /*
    const passLogin = process.env.PASS_LOGIN ? process.env.PASS_LOGIN : '1234';

    if (!passLogin) {
        console.error("A variável de ambiente PASS_LOGIN não está definida.");
        process.exit(1);
    }

    try {
        let adminLogin = await db.login.findFirst({ where: { email: 'humanizei@gmail.com' } });

        if (!adminLogin) {
            adminLogin = await db.login.create({
                data: {
                    password: generateHashedPassword(passLogin),
                    role: Roles.MASTER,
                    email: "humanizei@gmail.com",
                    name: "Admin"
                },
            });
            console.log(`Admin login created with ID: ${adminLogin.uuidLogin}`);
        }
    } catch (error) {
        throw error
    }*/
}

export default createMasterAccount





