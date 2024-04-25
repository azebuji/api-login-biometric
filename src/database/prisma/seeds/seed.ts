import createMasterAccount from './createMasterAccount';
import db from "../../helpers/connection";
//import { createPlan } from './createPlan';

async function seedAll() {
    await createMasterAccount(db);
    // await createPlan(db);
}

seedAll()
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        db.$disconnect();
    });