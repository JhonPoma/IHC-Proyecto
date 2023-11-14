const express = require('express');
const cors = require('cors'); //para poder comunicar distintos dominios
const { Client } = require('pg');



const app = express();
const PORT =5500;

// Configuración de CORS
app.use(cors());
const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200,
  };  
app.use(cors(corsOptions));
  


// Configura la conexión a tu base de datos
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'loginIHC',
  password: 'pomita123',
  port: 5432, // Puerto de PostgreSQL
});
console.log("jhonnnnnnnnnn");
// Conecta a la base de datos
client.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ruta para validar las credenciales
app.post('/validar', async (req, res) => {
    console.log("holaaaMeEstanLLamando");
    const { correo, pass } = req.body;

    try {
        // Realiza una consulta a la base de datos para verificar las credenciales
        const query = 'SELECT * FROM login WHERE usuario = $1 AND contrasena = $2';
        const result = await client.query(query, [correo, pass]);

        if (result.rows.length === 1) {
            res.status(200).send('Acceso concedido');
        } else {
            res.status(401).send('CREdenciales incorrectas-BACKEND');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});