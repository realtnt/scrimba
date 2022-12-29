const washcarEl = document.getElementById("washcar")
const mowlawnEl = document.getElementById("mowlawn")
const pullweedsEl = document.getElementById("pullweeds")
const breakdownEl = document.getElementById("breakdown")
const totalamountEl = document.getElementById("totalamount")
const sendinvoiceEl = document.getElementById("sendinvoice-btn")

srv = [
    {
        service: "Wash Car",
        cost: 10,
        btn: washcarEl
    },
    {
        service: "Mow Lawn",
        cost: 20,
        btn: mowlawnEl
    },
    {
        service: "Pull Weeds",
        cost: 30,
        btn: pullweedsEl
    }
]
services_rendered = []

washcarEl.addEventListener("click", function () {
    toggleService(0)
    renderInvoice()
})

mowlawnEl.addEventListener("click", function () {
    toggleService(1)
    renderInvoice()
})

pullweedsEl.addEventListener("click", function () {
    toggleService(2)
    renderInvoice()
})

sendinvoiceEl.addEventListener("click", function () {
    reset()
})

function toggleService(serviceId) {
    let button = srv[serviceId].btn
    if (services_rendered.find(e => e === serviceId) != undefined) {
        index = services_rendered.indexOf(serviceId)
        services_rendered.splice(index, 1)
        button.setAttribute("class", "")
    } else {
        services_rendered.push(serviceId)
        button.setAttribute("class", "selected")
    }
}

function renderInvoice() {
    outputHTML = ``
    totalAmount = 0
    if (services_rendered.length == 0) {
        outputHTML = `<tr><td></td><td></td></tr>`
    }

    for (let i = 0; i < services_rendered.length; i++) {
        typeOfService = srv[services_rendered.sort()[i]]
        outputHTML += `
        <tr>
            <td>${typeOfService.service}</td>
            <td><span class="curr">$</span>${typeOfService.cost}</td>
        </tr>
    `
        totalAmount += parseInt(typeOfService.cost)
    }

    totalamountEl.textContent = "$" + totalAmount
    breakdownEl.innerHTML = outputHTML
}

function reset() {
    breakdownEl.innerHTML = `<tr><td></td><td></td></tr>`
    totalamountEl.textContent = "$0"
    services_rendered = []
    for (let i = 0; i < srv.length; i++) {
        let button = srv[i].btn
        button.setAttribute("class", "")
    }
}