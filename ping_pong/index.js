const http = require('http');                         // Módulo de Node para crear servidores web

const PORT = process.env.PORT || 3000;                // Puerto: variable PORT o 3000 por defecto
let counter = 0;                                      // Contador en memoria (la "pizarra"); se reinicia si el pod se reinicia

const server = http.createServer((req, res) => {      // Atiende cada petición HTTP
  if (req.url === '/pingpong') {                      // Solo responde en la ruta /pingpong (la que manda el Ingress)
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // 200 = OK; responde texto plano
    res.end(`pong ${counter}`);                       // Responde con el valor actual del contador
    counter++;                                        // Suma 1 para la siguiente visita
  } else {                                            // Cualquier otra ruta...
    res.writeHead(404);                               // ...responde 404 = "no encontrado"
    res.end('Not found');
  }
});

server.listen(PORT, () => {                           // Empieza a escuchar en el puerto
  console.log(`Server started in port ${PORT}`);      // Avisa en los logs que arrancó
});
