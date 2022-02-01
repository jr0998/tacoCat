function getString() {
    document.getElementById("alert").classList.add("invisible");
    let testStr = [];
    let str = document.getElementById("stringInput").value;
    testStr = reverseStr(str);
    str = composeString(str);
    testStr = composeString(testStr);
    let check = checkPal(str, testStr);

    displayMessage(check, str, testStr);

}

function reverseStr(str) {
    let testStr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        testStr += str[i];
    }
    return testStr;
}

function composeString(str) {
    str = str.replace(/\s/g, '');
    return str;
}

function checkPal(str, testStr) {
    let check = true;

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase != testStr[i].toLowerCase) {
            check = false;
        }
    }
    return check;
}

function displayMessage(check, str, testStr) {
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