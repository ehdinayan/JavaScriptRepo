const net = require('net');

// Verificar si el puerto está especificado como argumento de línea de comandos
if (process.argv.length !== 3) {
  console.error('Uso: node server.js <puerto>');
  process.exit(1);
}

const port = Number(process.argv[2]);

// Crear el servidor TCP
const server = net.createServer((socket) => {
  // Obtener la fecha y hora actual
  const now = new Date();
  const formattedDate = formatDate(now);

  // Enviar la fecha y hora al cliente
  socket.write(formattedDate + '\n');

  // Cerrar la conexión
  socket.end();
});

// Función para formatear la fecha y hora
function formatDate(date) {
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// Función para agregar un cero delante si es necesario
function padZero(num) {
  return (num < 10 ? '0' : '') + num;
}

// Escuchar en el puerto especificado
server.listen(port, () => {
  console.log(`Servidor de tiempo y hora TCP escuchando en el puerto ${port}`);
});

/*
Version oficial:

'use strict'
    const net = require('net')

    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      const d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }

    const server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2]))
*/


