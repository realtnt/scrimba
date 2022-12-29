const paragraphEl = document.getElementById("paragraph")
const properEl = document.getElementById("proper-btn")
const brokenEl = document.getElementById("broken-btn")
const upperEl = document.getElementById("upper-btn")
const lowerEl = document.getElementById("lower-btn")
const crazyEl = document.getElementById("crazy-btn")

document.getElementById("btn").addEventListener("click", correct)

properEl.addEventListener("click", optionSelect)
brokenEl.addEventListener("click", optionSelect)
upperEl.addEventListener("click", optionSelect)
lowerEl.addEventListener("click", optionSelect)
crazyEl.addEventListener("click", optionSelect)

let buttons = [properEl, brokenEl, upperEl, lowerEl, crazyEl]

function optionSelect() {
    for (const button of buttons) {
        button.setAttribute("class", "")
    }
    this.setAttribute("class", "selected")
}

function correct() {
    if (properEl.getAttribute("class") === "selected") {
        paragraphEl.value = titleCase(paragraphEl.value)
    } else if (brokenEl.getAttribute("class") === "selected") {
        paragraphEl.value = revTitleCase(paragraphEl.value)
    } else if (upperEl.getAttribute("class") === "selected") {
        paragraphEl.value = paragraphEl.value.toUpperCase()
    } else if (lowerEl.getAttribute("class") === "selected") {
        paragraphEl.value = paragraphEl.value.toLowerCase()
    } else {
        paragraphEl.value = crazyCase(paragraphEl.value)
    }
}

function titleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        }
    )
}

function revTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toLowerCase() + txt.substr(1).toUpperCase()
        }
    )
}

function crazyCase(str) {
    let txt = ""
    for (let i = 0; i < str.length; i++) {
        if (i % 2 == 0) {
            txt += str.charAt(i).toUpperCase()
        }
        else {
            txt += str.charAt(i).toLowerCase()
        }
    }
    return txt
}