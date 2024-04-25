
import { Server, Socket } from 'socket.io';



import * as servicesProcessFrame from './services'



export async function processFrame(socket: Socket, io: Server) {
    try {

        /*await servicesAttendant.getAttendantOnlineByCompany(tokenDecoded.fkCompany).then((uuidAttendant) => {
            io.emit(String(tokenDecoded.fkCompany), uuidAttendant);
        })*/


    } catch (error) {
        io.to(socket.id).emit('error', error);
    }
}

