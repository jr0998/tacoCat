function getString() {
    document.getElementById("alert").classList.add("invisible");
    let revStr = [];
    let str = document.getElementById("stringInput").value;
    revStr = reverseStr(str);
    str = composeString(str);
    revStr = composeString(revStr);
    let check = checkPal(str, revStr);

    displayMessage(check, str, revStr);

}

function reverseStr(str) {
    let revStr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}

function composeString(str) {
    str = str.replace(/\s/g, '');
    return str;
}

function checkPal(str, revStr) {
    let check = true;

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase != revStr[i].toLowerCase) {
            check = false;
        }
    }
    return check;
}

function displayMessage(check, str, revStr) {
    if (!check) {
        document.getElementById("alert").classList.remove("alert-success");
        document.getElementById("alert").classList.add("alert-danger");
        document.getElementById("statement").innerText = "Not Plaidrome";
        document.getElementById("msg").innerHTML = `String Normal: ${str}<br> String reversed: ${revStr}`;
        document.getElementById("alert").classList.remove("invisible");
    } else {
        document.getElementById("alert").classList.remove("alert-danger");
        document.getElementById("alert").classList.add("alert-success");
        document.getElementById("statement").innerText = "Plaidrome";
        document.getElementById("msg").innerHTML = `String Normal: ${str} <br> String reversed: ${revStr}`;
        document.getElementById("alert").classList.remove("invisible");

    }
}