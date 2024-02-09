// BACKEND

const http = require('http');
const express = require('express');
const { isIPv4 } = require('net');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorHttp);

// Socket - recebe uma mensagem e a envia para todos conectados na página.
io.addListener('connection', (socket) => {
    console.log('Um usuário conectou');
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    })
})



aplicacao.use(express.static('public'));   // Arquivos estáticos (http; express)

                // porta: 1000 ipv4: http://192.168.0.84:1000/
servidorHttp.listen(1000, '192.168.0.84');