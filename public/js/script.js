function printMe() {
    console.log('I get called from print.js!');
}

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.shiftKey && event.which == 73) {
        event.preventDefault();
    }
}, false);

document.addEventListener('contextmenu', function(event) {
    event.preventDefault()
}, false)


function flag1Checker() {
    let x = document.getElementById('message-input').value
    if (x == "test") {
        alert("You got it correct!")
    } else {
        alert("You got it wrong")
    }
}

function flag2Checker() {
    let y = document.getElementById("message-input2").value
    if (y == "test2") {
        alert("You got it correct!")
    } else {
        alert("You got it wrong")
    }
}

function flag3Checker() {
    let z = document.getElementById("message-input3").value
    if (z == "test3") {
        alert("You got it correct!")
    } else {
        alert("You got it wrong")
    }
}
