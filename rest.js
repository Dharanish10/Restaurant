const users = [
    { username: 'Dharanish', password: 'dhar@1602' },
    { username: 'Kala', password: '98422@kala' },
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.username === username);

    if (user) {
        if (user.password === password) {
                location.replace("http://127.0.0.1:5500/rest.html")
        } else {
            alert("password is incorrect");

        }
    } else {
        alert("User not found. Please check your username.");
    }
}

console.log('welcome');
