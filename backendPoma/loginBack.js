const express = require('express');
const cors = require('cors'); 
const { Client } = require('pg');

const app = express();
const PORT =5500;

// app.use(cors());
// const corsOptions = {
//     // origin: 'http://127.0.0.1:5500',
//     origin: 'http://127.0.0.1:8000',

//     optionsSuccessStatus: 200,
//   };  
// app.use(cors(corsOptions));
  
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000'); // replace this with your frontend application's origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});





// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'PostgreSQL 16',
//   password: '1234',
//   port: 5432, 
// });
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'instructor',
    password: '1234',
    port: 5432, 
  });
//console.log("jhonnnnnnnnnn");
client.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// inicio Sesion.
app.post('/validar', async (req, res) => {
    console.log("holaaaMeEstanLLamando");
    const { correo, pass } = req.body;

    try {
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

// Registro un usuario.
app.post('/registrar', async(req,res)=>{
    console.log("registrandoNode-PSQL");
    const{correo, pass} = req.body;
    try{
        console.log("flag1");
        const existeUsuario = await client.query('SELECT * FROM login WHERE usuario=$1',[correo]);
        console.log("flag2");
        
        if(existeUsuario.rows.length > 0){
            res.status(400).send("El correo ya esta registrado");
        }
        else{
            //INSERTAMOS el nuevo correo
            const query = 'INSERT INTO login (usuario, contrasena) VALUES ($1,$2) RETURNING *';
            const nuevoUsuario = await client.query(query,[correo,pass]);
            res.status(201).json({message:'Usuario registrado con exito', usuario: nuevoUsuario.rows[0]});
        }
    }catch(error){
        console.error(error);
        res.status(500).send("erroe en el servidor");
    }
})
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});