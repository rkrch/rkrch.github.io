fetch("https://v6.exchangerate-api.com/v6/466f834ac2173f991f9c364d/latest/USD")
.then(response => response.json())
.then(data => {
    const currencyDiv = document.getElementById('currency');
    currencyDiv.innerHTML = `Текущий курс USD to EUR: ${data.conversion_rates.EUR}`;
})
.catch(error => console.error(error));
