const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


const convertValues = async () => {
    const inputCurrencyValue = Number (document.querySelector(".input-currency").value)
    const currencyValueToConverte = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueToConverted = document.querySelector(".currency-value") // Outras moedas

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL").then(response => response.json())

    const dolar = data.USDBRL.ask
    const euro = data.EURBRL.ask
    const libra = data.GBPBRL.ask
    
    
    currencyValueToConverte.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue)


    if (currencySelect.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrencyValue / dolar)
    }

    if (currencySelect.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue / euro)
    }

        if (currencySelect.value == "libra") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue / libra)
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }


    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    convertValues()
}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)