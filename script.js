function changePage(pageName) {
    if (pageName === "canvas") {
        window.location.href = "canvas.html";
    } else if (pageName === "index") {
        window.location.href = "index.html";
    } else if (pageName === "formular") {
        window.location.href = "formular.html";
    }
}

function startCanvas() {
    var canvas = document.getElementById("myCanvas");
    canvas.width = 600;
    canvas.height = 400;
    var context = canvas.getContext("2d");

    var x = 20;
    var y = 20;
    var xSign = 1;
    var ySign = 1;

    function drawBall() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(x, y, 20, 0, 2 * Math.PI);
        context.fillStyle = '#65ff3c';
        context.fill();
        context.strokeStyle = '#000000';
        context.stroke();
        if (x >= 580) {
            xSign = -1;
        }
        if (y >= 380) {
            ySign = -1;
        }
        if (x <= 20) {
            xSign = 1;
        }
        if (y <= 20) {
            ySign = 1;
        }
        x = x + (xSign * 2);
        y = y + (ySign * 2);
    }

    setInterval(drawBall, 5);
}

function submitPressed() {
    var gender = "";
    var somethingNotSet = true;
    if (document.getElementById("male").checked) {
        gender = "Herr ";
        somethingNotSet = false;
    } else if (document.getElementById("female").checked) {
        gender = "Frau ";
        somethingNotSet = false;
    } else if (document.getElementById("other").checked) {
        somethingNotSet = false;
    }

    var label = "";
    if (somethingNotSet) {
        label = "Bitte geben Sie Ihr Geschlecht an.";
    } else {
        label = "Vielen Dank " + gender;
    }

    if (!somethingNotSet) {
        var surname = document.getElementById("surname");
        if (surname.value === "") {
            label = "Bitte geben Sie Ihren Vornamen ein.";
            somethingNotSet = true;
        } else {
            label += surname.value + " ";
        }
    }

    if (!somethingNotSet) {
        var name = document.getElementById("name");
        if (name.value === "") {
            label = "Bitte geben Sie Ihren Nachnamen ein.";
        } else {
            label += name.value;
        }
    }

    document.getElementById("feedback").innerHTML = label;
}

