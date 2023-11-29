

// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     var correo = document.querySelector('#correo').value;
//     var pass = document.querySelector('#pass').value;

//     console.log(correo); // Corrected line

//     fetch('http://localhost:3000/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ correo: correo, pass: pass }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             // login successful, redirect to dashboard
//             window.location.href = "../LoginInstructor/principalInstructor.html";
//         } else {
//             alert('usuario no registrado');
//         }
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// });

// document.getElementById('loginInstr').addEventListener('submit', function(event) {
//     event.preventDefault();

//     var account = document.getElementById('account').value;
//     var password = document.getElementById('password').value;

//     var data = { account: account, password: password };

//     fetch('http://localhost:3000/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//     .then(response => response.text())
//     .then(data => alert(data))
//     .catch(error => console.error('Error:', error));
// });

document.getElementById('loginInstr').addEventListener('submit', function(event) {
    event.preventDefault();

    var correo = document.getElementById('account').value;
    var pass = document.getElementById('password').value;

    var data = { correo: correo, pass: pass };

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
});
