const ascii = Array.from(Array(93)).map((e, i) => i + 33);
const asciiChars = ascii.map((x) => String.fromCharCode(x));

let pass1el = document.getElementById("pass1")
let pass2el = document.getElementById("pass2")
let pass3el = document.getElementById("pass3")
let pass4el = document.getElementById("pass4")
let passlengthel = document.getElementById("pass-length")

let passwordLength = passlengthel.value

function genPasswords() {
    passwordLength = passlengthel.value
    if (passwordLength > 20) {
        passwordLength = 20
        passlengthel.value = 20
    } else if (passwordLength < 8) {
        passwordLength = 8
        passlengthel.value = 8
    }
    pass1el.value = generatePass()
    pass2el.value = generatePass()
    pass3el.value = generatePass()
    pass4el.value = generatePass()
}

function generatePass() {
    password = []
    for (i = 0; i < passwordLength; i++) {
        password.push(asciiChars[Math.floor(Math.random() * 93)])
    }
    return password.join('')
}

function copyToClipboard(clickedID) {
    copyText = document.getElementById(clickedID)
    copyText.select();
    navigator.clipboard.writeText(copyText.value)
}

