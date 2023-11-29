const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // replace 'uploads/' with your desired directory

const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
// const session = require('express-session');

// const mailjet = require('node-mailjet')
// .connect('eea149786339cfcda06374b795102638', '52c030c06bae2e9da1901e8610f79510');
const mailjet = require('node-mailjet').apiConnect(
    'eea149786339cfcda06374b795102638',
    '52c030c06bae2e9da1901e8610f79510'
);

const app = express();
const port = 3000;


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000'); // replace this with your frontend application's origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/register', upload.single('certificate'), (req, res) => {
    const { name, career, description, email } = req.body;
    const certificatePath = req.file.path;

    fs.chmodSync('uploads/', '600');


    let fileContent;
    try {
        fileContent = fs.readFileSync(certificatePath).toString("base64");
    } catch (err) {
        console.error(`Error reading file from disk: ${err}`);
    }

    // Create the email
    const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
            Messages: [
                {
                    From: {
                        Email: "alexander.miller.rojas@gmail.com",
                        Name: "Uni Study Hub"
                    },
                    To: [
                        {
                            Email: "alexander.rojas.s@uni.pe",
                            Name: "Gestor de instructores "
                        }
                    ],
                    Subject: "Solicitud the instructor",
                    TextPart: "Dear" + description + " this is the email " + email + " , welcome to Mailjet! May the delivery force be with you!",
                    //HTMLPart: "<h3>Dear" + description + " this is the email " + email +  ", welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!",
                    //HTMLPart: "<h3>Dear" + description + ", welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you! <form action=\"http://localhost:3000/approve\" method=\"post\"> <input type=\"hidden\" name=\"instructorEmail\" value=\"${email}\" /><button type=\"submit\">Approve</button></form>",
                    //HTMLPart: "<h3>Dear" + description + ", welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!<a href=\"http://localhost:3000/approve\">Approve</a>",
                    HTMLPart:
                        "<p>Descripcion del instructor: </p>" +
                        "<ul>" +
                        "<li><strong>Nombre del Instructor: </strong> " + name + "</li>" +
                        "<li><strong>Carrera: </strong> " + career + "</li>" +
                        "<li><strong>Descripcion: </strong> " + description + "</li>" +
                        "<li><strong>Correo:</strong> " + email + "</li>" +
                        "</ul>" +
                        "<p>Los certificados son incluidos aqui.</p>", 

                    Attachments: [
                        {
                            Filename: "certificate.pdf",
                            Base64Content: fs.readFileSync(certificatePath).toString("base64"),
                            ContentType: "application/pdf"
                        }
                    ]
                }
            ]
        })

    // Send the email
    request
        .then((result) => {
            console.log(result.body);
            res.send('Registration successful. Please wait for approval.');
        })
        .catch((err) => {
            console.log(err.statusCode);
            res.status(500).send('An error occurred while sending the approval email.');
        });
});

app.delete('/delete_course_page/:courseName', (req, res) => {
    let courseName = req.params.courseName;
    courseName = courseName.replace(/ /g, '_');
    const filePath = path.join(__dirname, `${courseName}.html`);

    // Print the file path
    console.log('File Path:', filePath);

    var permissions = '755';

    fs.chmod(filePath, permissions, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Permissions changed to ' + permissions);
        }
    });

    if (!fs.existsSync(filePath)) {
        res.status(404).send('The page does not exist.');
        return;
    }

    fs.unlink(filePath, err => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while deleting the page.');
            return;
        }

        res.send('Page deleted successfully.');
    });


});


///////////////////////////////////////////////////////////
// Connection string to your PostgreSQL database
const db = pgp('postgres://postgres:1234@localhost:5432/instructor');

// app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.post('/storeInstructor', (req, res) => {
  const account = req.body.account;
  const password = req.body.password;

db.one('INSERT INTO instructors(account, password) VALUES($1, $2) RETURNING id', [account, password])
  .then(data => {
    console.log(data.id); // print new id;
    res.send('Account and password saved successfully with id: ' + data.id);
  })
  .catch(error => {
    console.log(error);
    res.status(500).send('Error saving account and password');
  });
});

// Use the session middleware
app.use(session({ secret: 'your secret key', cookie: { maxAge: 60000 }}));

app.post('/login', async (req, res) => {
    const { correo, pass } = req.body;

    try {
        const user = await db.oneOrNone('SELECT * FROM instructors WHERE account = $1 AND password = $2', [correo, pass]);

        if (user) {
            res.json({ success: true, instructorName: user.account });
        } else {
            res.json({ success: false, message: 'User not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false });
    }
});

// app.post('/login', async (req, res) => {
//     const { correo, pass } = req.body;

//     try {
//         const user = await db.oneOrNone('SELECT * FROM instructors WHERE account = $1 AND password = $2', [correo, pass]);

//         if (user) {
//             // Store user id in the session
//             req.session.instructorId = user.id;
//             res.json({ success: true, instructorName: user.account });
//         } else {
//             res.json({ success: false, message: 'User not found' });
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ success: false });
//     }
// });

/////courses


///////////////////////////////////////////////////////////////


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

