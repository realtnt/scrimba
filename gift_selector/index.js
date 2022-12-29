document.getElementById("btn").addEventListener("click", calculate)
const costEl = document.getElementById("cost-el")
const transportselectEl = document.getElementById("transport-select")
const foodselectEl = document.getElementById("food-select")
const errorEl = document.getElementById("error")
const balloonsEl = document.getElementById("balloons")
const ballooncheckboxEl = document.getElementById("balloon-checkbox")
const confirmmsgEl = document.getElementById("confirm-msg")

function calculate() {
    if (transportselectEl.value && foodselectEl.value) {
        costEl.textContent = "🪙" + (parseInt(transportselectEl.value) + parseInt(foodselectEl.value))
        errorEl.setAttribute("class", "hide")
        errorEl.textContent = ""
        confirmmsgEl.innerHTML = foodselectEl.options[foodselectEl.selectedIndex].text + "<br>"
        confirmmsgEl.innerHTML += transportselectEl.options[transportselectEl.selectedIndex].text + "<br>"
        if (ballooncheckboxEl.checked) {
            confirmmsgEl.innerHTML += "🎈 Free balloons added."
        } else {
            confirmmsgEl.innerHTML += "❌ No free balloons."
        }
        confetti({
            particleCount: 250,
            spread: 180,
            origin: {
                x: 0.5,
                y: 0.6
            }
        });

    } else {
        confirmmsgEl.innerHTML = ""
        errorEl.setAttribute("class", "show-error highlight")
        errorEl.textContent = "Check your selections!"
        if (!foodselectEl.value) {
            foodselectEl.setAttribute("style", "border: 2px red solid !important;")
        }
        if (!transportselectEl.value) {
            transportselectEl.setAttribute("style", "border: 2px red solid !important;")
        }
    }
}

foodselectEl.addEventListener("change", function () {
    foodselectEl.setAttribute("style", "border: 2px #FBF3AB solid !important;")
})

transportselectEl.addEventListener("change", function () {
    transportselectEl.setAttribute("style", "border: 2px #FBF3AB solid !important;")
})

ballooncheckboxEl.addEventListener("click", function () {
    if (ballooncheckboxEl.checked) {
        balloonsEl.textContent = "Free balloons added! 🎈"
    } else {
        balloonsEl.textContent = "Add free balloons? 🎈"
    }
})
