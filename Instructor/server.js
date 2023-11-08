// const express = require('express');
// const fs = require('fs');
// const app = express();
// const port = 3000;

// app.get('/create_course_page/:courseName', (req, res) => {
//     const courseName = req.params.courseName;
//     const newPageContent = `
//     <html>
//     <head>
//         <title>${courseName}</title>
//     </head>
//     <body>
//         <h1>${courseName}</h1>
//     </body>
// </html>
//     `;

//     fs.writeFile(`./${courseName}.html`, newPageContent, err => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('An error occurred while creating the page.');
//             return;
//         }

//         res.send('Page created successfully.');
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;




app.get('/create_course_page/:courseName', (req, res) => {
    let courseName = req.params.courseName;
    courseName = courseName.replace(/ /g, '_');
    const filePath = path.join(__dirname, `${courseName}.html`);

    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
        return;
    }

    // Path to your HTML template
    const templatePath = path.join(__dirname, 'template.html');
    fs.readFile(templatePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while reading the template.');
            return;
        }

        // Replace placeholder in template with course name
        const newPageContent = data.replace(/\${courseName}/g, courseName);



        fs.writeFile(filePath, newPageContent, err => {
            if (err) {
                console.error(err);
                res.status(500).send('An error occurred while creating the page.');
                return;
            }

            res.send(newPageContent);
        });
    });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
