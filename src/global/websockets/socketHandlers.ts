
import { processFrame } from "../../resources/ProccessFrame/websockets";

import ApiResponse from "../helpers/classes/apiResponse";
import { getIO } from "../../config/socketManager";

async function initWebSockets() {
    const io = getIO();

    io.on('connection', async (socket) => {
        try {

            //console.log("socket que conectou: ", socket.rooms)
            await processFrame(socket, io);

            socket.on('disconnect', async (reason) => {
                console.log('entreo aqui')
            })
        } catch (error) {
            io.to(socket.id).emit("error", error)
        }
    });

}

export default initWebSockets;