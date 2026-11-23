const http = require('http');                        // Módulo de Node para crear servidores web

const PORT = process.env.PORT || 3000;               // Puerto: variable PORT o 3000 por defecto
const id = crypto.randomUUID();                      // Texto aleatorio, generado UNA vez al arrancar

const status = () => `${new Date().toISOString()}: ${id}`;  // Estado actual: hora de ESTE momento + id

setInterval(() => console.log(status()), 5000);     // Sigue escribiendo el estado en los logs cada 5 s

const server = http.createServer((req, res) => {     // La "ventanilla": atiende cada petición HTTP
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // 200 = OK; responde texto plano
  res.end(status());                                 // Responde con el estado actual
});

server.listen(PORT, () => {                          // Empieza a escuchar en el puerto
  console.log(`Server started in port ${PORT}`);     // Avisa en los logs que arrancó
});
