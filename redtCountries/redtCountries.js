
const loadCuntries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displyCuntries(data))
}

const displyCuntries = (data) => {
    const countresContainer = document.getElementById('countries');
    data.forEach(country => {
        console.log(country);
        const contryDiv = document.createElement('div');
        contryDiv.classList.add('can')
        contryDiv.innerHTML = `
        <h3 class=" ">Name: ${country.name.common}</h3>
        <p class=" ">Capital: ${country.capital ? country.capital[0] : 'no Capital'}</p>
        <button class="btn" onclick="loadCountruDetail('${country.cca2}')">Click Me</button>
        <img src="${country.flags.png}" style="width: 80px; height: 50px;" id="icon" alt="">
        `
        countresContainer.appendChild(contryDiv);
    });
}

const loadCountruDetail = (code) => {

    // https://restcountries.com/v3.1/alpha/${code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('Loading countruDetail', url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCantry(data));
}


const displayCantry= counrty =>{
    console.log('Loading countruDetail', counrty);

}

loadCuntries()
// loadCountruDetail()