const app = require('../src/app');
const debug = require('debug')('balta: server');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('Api está rodando na porta' +port);


//função pra usar a porta disponível
function normalizePort(val) {
    const port = parseInt(val,10);

    if(isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

//tratando um erro do servidor
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ?
    'Pipe' + port :
    'Port' + port;

    switch (error.code){
        case 'EACCES': //caso for um erro de permissao
            console.error(bind + 'requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE': //se o endereço esta em uso
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

//startar o debug
function onListening(){
    const addr = server.address();
    const bind = typeof addr == 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on '+ bind); 
}

