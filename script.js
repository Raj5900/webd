function sum() {
    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);
    var result = num1 + num2;
    document.getElementById("result").innerText = result;
}

function diff() {
    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);
    var result = num1 - num2;
    document.getElementById("result").innerText = result;
}

function mul() {
    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);
    var result = num1 * num2;
    document.getElementById("result").innerText = result;
}

function div() {
    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);
    if (num2 === 0) {
        alert("ZERO DIVISION NOT ALLOWED")
    } else {
        var result = num1 / num2;
        document.getElementById("result").innerText = result;
    }
}

function clearfield()
{
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
    document
}
