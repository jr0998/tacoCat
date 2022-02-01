function getString() {
    document.getElementById("alert").classList.add("invisible");

    let str = document.getElementById("stringInput").value;

    str = checkPal(str);

    displayMessage(str);

}

function checkPal(str) {
    str = str.replace(/\s/g, '');
    return str;
}

function displayMessage(str) {
    let testStr = [];
    let check = true;
    for (let i = str.length - 1; i >= 0; i--) {
        testStr += str[i];
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() != testStr[i].toLowerCase()) {
            check = false;
        }
    }
    if (!check) {
        document.getElementById("alert").classList.remove("alert-success");
        document.getElementById("alert").classList.add("alert-danger");
        document.getElementById("statement").innerText = "Not Plaidrome";
        document.getElementById("msg").innerHTML = `String Normal: ${str}<br> String reversed: ${testStr}`;
        document.getElementById("alert").classList.remove("invisible");
    } else {
        document.getElementById("alert").classList.remove("alert-danger");
        document.getElementById("alert").classList.add("alert-success");
        document.getElementById("statement").innerText = "Plaidrome";
        document.getElementById("msg").innerHTML = `String Normal: ${str} <br> String reversed: ${testStr}`;
        document.getElementById("alert").classList.remove("invisible");

    }
}