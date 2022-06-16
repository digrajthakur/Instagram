function login() {
    var uname = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    if (uname == "World" && pass == "123") {
        location.assign("https://www.instagram.com/deepanshuthakur360/");
    } else {
        window.alert("login failed");
    }
}