const user = localStorage.getItem("user")

const welcome = document.getElementById("welcome").innerHTML = `Bienvenido a tu cajero online ${user}`

const money = Number(localStorage.getItem("money"))

const amount = document.getElementById("amount").innerHTML = `Tu saldo disponible es: ${money}`

function cashDeposit(cash) {
    let totalAmount = money + cash
    localStorage.setItem("money", totalAmount)
    amount.innerHTML = `Tu saldo disponible es: ${money}`
}

const deposito = document.getElementById("deposit")

deposito.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let inputDeposit = Number(document.getElementById("inputDeposit").value)
    cashDeposit(inputDeposit)
})

function cashWithdraw(cash) {
    amountBelow = money - cash
    if (amountBelow < 0) {
        amount.innerHTML = `Tu saldo no es suficiente`
    } else {
        let totalAmount = money - cash
        localStorage.setItem("money", totalAmount)
        const myTimeout = setTimeout(myAlert, 1000);
        amount.innerHTML = `Tu saldo disponible es: ${money}`;
        alert(`Realizaste un retiro`)
    }
}

const retiro = document.getElementById("withdraw")

retiro.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let inputWithdraw = Number(document.getElementById("inputWithdraw").value)
    cashWithdraw(inputWithdraw)
})
