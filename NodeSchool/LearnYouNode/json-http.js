//Importar modulos necesarios

const http = require('http');
const { URL } = require('url');

//crear el servidor http - definir manejo de solicitudes

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;
  const iso = parsedUrl.searchParams.get('iso');

  if (pathname === '/api/parsetime') {
    handleParseTime(iso, res);
  } else if (pathname === '/api/unixtime') {
    handleUnixTime(iso, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

//Definir funciones de manejo de rutas
//Define la funcion 'handleParseTime' y 'handleUnixTime' para
//manejar las rutas especificadas.

function handleParseTime(iso, res) {
  const date = new Date(iso);
  const result = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(result));
}

function handleUnixTime(iso, res) {
  const date = new Date(iso);
  const result = {
    unixtime: date.getTime()
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(result));
}

//Escuchar en el puerto especificado

const port = process.argv[2];
server.listen(Number(port), () => {
  console.log(`Server listening on port ${port}`);
});

/*Version oficial

'use strict'
    const http = require('http')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime: time.getTime() }
    }

    const server = http.createServer(function (req, res) {
      const parsedUrl = new URL(req.url, 'http://example.com')
      const time = new Date(parsedUrl.searchParams.get('iso'))
      let result

      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
*/


