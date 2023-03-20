// API website - https://www.exchangerate-api.com/
// login on this site and get the api key

const currencyFirstElement = document.getElementById("currency-first");
const worthFirstElement = document.getElementById("worth-first");
const currencySecondElement = document.getElementById("currency-second");
const worthSecondElement = document.getElementById("worth-second");
const exchangeRateElement = document.getElementById("exchange-rate");

updateRate(); // fuction called explicitly to update the default data

// runs when any change occur in currency
function updateRate() {
    // changing data according to currency
    fetch(`https://v6.exchangerate-api.com/v6/717b3afa3e6ea0adcd22aa5f/latest/${currencyFirstElement.value}`) // fetch data
        .then((res) => res.json()) // convert fetched data to json
        .then((data) => {
            // rate according to second element
            const rate = data.conversion_rates[currencySecondElement.value]

            exchangeRateElement.innerText = `1 ${currencyFirstElement.value} = ${rate} ${currencySecondElement.value}`

            // changing data of 'worth' input
            worthSecondElement.value = (worthFirstElement.value * rate).toFixed(2);
            // toFixed(2) will give only two digits
        }) // show data
}

currencyFirstElement.addEventListener("change", updateRate);

currencySecondElement.addEventListener("change", updateRate);

worthFirstElement.addEventListener("input", updateRate);