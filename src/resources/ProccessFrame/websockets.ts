import { spawnSync } from 'child_process';
import { Server, Socket } from 'socket.io';

import * as servicesProcessFrame from './services'
import ApiResponse from '../../global/helpers/classes/apiResponse';
import path from 'path';

export async function processFrame(socket: Socket, io: Server) {


    // Evento de conexão WebSocket

    // Evento de recebimento de mensagem WebSocket
    socket.on('message', async (message) => {
        try {
            // Quando os dados do frame forem recebidos
            // Chame o script Python passando os dados
            const resultadoDoProcessamento = await chamarScriptPython(message);

            // Envie os resultados de volta para o front-end
            io.send(resultadoDoProcessamento);
        } catch (error) {
            io.to(socket.id).emit('error', String(error))
        }

    })


}


// Função para chamar o script Python
async function chamarScriptPython(dadosDoFrame) {


    //stdin = escrever dados para dentro do script
    //stdout = saída padrão do processo filho
    //stderr = quando ocorre um erro no processo filho

    const childPython = spawnSync('python', [__dirname + '/scripts/test.py', String(dadosDoFrame)]);


    // Verifica se houve erro na execução do script
    if (childPython.error) {
        throw childPython.error;
    }

    // Verifica se o processo filho terminou com um código de saída diferente de zero
    if (childPython.status !== 0) {
        throw new Error('O script Python retornou um código de saída diferente de zero.');
    }

    // Retorna a saída do script Python como uma string
    return childPython.stdout.toString();




}

