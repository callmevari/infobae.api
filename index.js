// Escritores de Portadas (EPOR)
// API - Interfaz para obtener / enviar / modificar / eliminar información
// http://localhost:3000/
// /noticias/1

// protocolo HTTP (80) / HTTPS (403) - REST (Representational State Transfer)
// métodos para interactuar por HTTP/S: GET, POST, PUT, DELETE (PATCH, ...)
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// req = request (solicitud, lo que envia el usuario)
// res = response (respuesta, lo que se le envia al usuario)
app.get('/', (req, res) => {
  res.send('Bienvenidos a la API de Escritores de Portadas!');
});

app.get('/noticias/1', (req, res) => {
  res.json({
    "id": 1,
    "titulo": "Robaron un banco perry!",
    "descripcion": "Lorem ipsum y algo más jeje...",
    "imagen": "https://cdn.arstechnica.net/wp-content/uploads/2012/06/mb101310_02-500x344.jpg"
  });
})

app.listen(port, () => {
  console.log(`Ramitapp listening at http://localhost:${port}`);
});
