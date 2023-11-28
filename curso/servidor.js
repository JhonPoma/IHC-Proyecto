// Importa la biblioteca axios
const axios = require("axios");

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta principal para servir curso.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "curso.html"));
});

// Ruta para procesar la pregunta
app.post("/procesar-pregunta", (req, res) => {
  // Define la pregunta que deseas enviar a ChatGPT
  let pregunta1 = req.body.pregunta;
  pregunta =
    "Solo responde esta pregunta si está relacionada al lenguaje de programación C.";
  pregunta +=
    "En otro caso da un mensaje indicando que no puedes responder la pregunta por lo anterior dicho. La pregunta es:" +
    pregunta1;

  // Configura tu clave de API de OpenAI
  const apiKey = "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";

  // Configura la URL de la API de OpenAI
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  // Realiza la solicitud a la API de ChatGPT
  axios
    .post(
      apiUrl,
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: pregunta },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
    .then((response) => {
      // Muestra la respuesta de ChatGPT
      const respuesta = response.data.choices[0].message.content;

      res.send(respuesta);
    })
    .catch((error) => {
      // Maneja los errores
      console.error("Error al enviar la pregunta:", error.message);
    });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
