function trigger() {
    document.getElementById("user_input").addEventListener("change", doCalculations)
}

function doCalculations() {
    n = document.getElementById("user_input").value
    lengthMsg = n + " meters = " + lenMtoF(n) + " feet | " + n + " feet = " + lenFtoM(n) + " meters"
    volumeMsg = n + " liters = " + volLtoG(n) + " gallons | " + n + " gallons = " + volGtoL(n) + " liters"
    massMsg = n + " kilos = " + massKtoP(n) + " pounds | " + n + " pounds = " + massPtoK(n) + " kilos"

    document.getElementById("length").textContent = lengthMsg
    document.getElementById("volume").textContent = volumeMsg
    document.getElementById("mass").textContent = massMsg
}

function lenMtoF(n) {
    return (n * 3.28084).toFixed(3);
}

function lenFtoM(n) {
    return (n / 3.28084).toFixed(3);
}

function volLtoG(n) {
    return (n * 0.2641722).toFixed(3);
}

function volGtoL(n) {
    return (n / 0.2641722).toFixed(3);
}

function massKtoP(n) {
    return (n * 2.204).toFixed(3);
}

function massPtoK(n) {
    return (n / 2.204).toFixed(3);
}