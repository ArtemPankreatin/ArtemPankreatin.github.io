document.getElementById('loginButton').onclick = function() {
    document.getElementById('loginModal').style.display = 'block';
}

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('loginModal').style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('loginModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function login() {
    const username = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    // Проверка данных (замените на вашу логику проверки)
    if (username === 'admin' && password === 'admin') {
        // Переход на другую страницу при успешной авторизации
        document.getElementById('profileButton').style.display = "block";
        document.getElementById('loginButton').style.display  = "none";
        document.getElementById('loginModal').style.display = 'none';
    } else {
        alert('Неправильный логин или пароль');
    }
}




document.getElementById('profileButton').onclick = function() {
    document.getElementsByClassName('mainFrame').style.display = 'none';
    document.getElementsByClassName('profileFrame').style.display = "block";
}