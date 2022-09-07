
const getId = (id) => {
    const idName = document.getElementById(id);

    return idName;
    // console.log(idName.value);
}


// is impurtent async
const loadPnone = async (searchText, dataLimit) => {
    //get url from 
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}

const processSearch = (dataLimit) => {
    // Start sprinner
    toggleSpinner(true);
    const searchId = getId('search');
    const searchText = searchId.value;
    // searchId.value = '';
    // console.log(searchId.value)
    loadPnone(searchText, dataLimit);
}

const displayPhones = (phones, dataLimit) => {
    const phoneContainer = getId('phone-container');
    phoneContainer.textContent = '';
    // console.log(phones)
    //display Phones only 3
    const showAllBtn = getId('show-btn');
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAllBtn.classList.remove('d-none');
    }
    else {
        showAllBtn.classList.add('d-none');
    }


    //display no all phone
    const noPhone = getId('no-phone');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none');
    }
    else {
        noPhone.classList.add('d-none');
    }
    //display all phone
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.setAttribute('class', 'col');
        phoneDiv.innerHTML = `
        <div class="card">
        <img src="${phone.image}" class="card-img-top " alt="">
        <div class="card-body">
        <h6 class="card-title">${phone.brand}</h6>
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the
                bulk of the card's content.</p>
           
            <button onclick="loadPnoneDetails('${phone.slug}')" id="phone-detelse" class=" btn btn-primary"  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >Phone Details</button>
        </div>
    </div>
    `
        phoneContainer.appendChild(phoneDiv);
    })
    // stop sprinner
    toggleSpinner(false);
}


//hendle search button click
document.getElementById('search-btn').addEventListener('click', function () {
    processSearch(10)
})
// search input field enter key handler
document.getElementById('search').addEventListener('keypress', function (e) {
    // console.log(e.key)
    if (e.key === 'Enter') {
        processSearch(10)
    }

})

const toggleSpinner = (isLoading) => {
    const spinner = getId('sprinner');
    if (isLoading) {
        spinner.classList.remove('d-none');
    }
    else {
        spinner.classList.add('d-none');
    }
}
// console.log(getId('search'))

//not best wey to load data
document.getElementById('show-btn').addEventListener('click', function () {
    processSearch()
})



const loadPnoneDetails = async (id) => {
    //get url from 
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhonesDetails(data.data);
}

const displayPhonesDetails = phone => {
    // console.log(phone);
    const modalTiles = getId('exampleModalLabel');
    modalTiles.innerText = phone.name;
    const phoneDetails = getId('m-body');
    phoneDetails.innerHTML = `
<img src="${phone.image}" class="card-img-top w-25" alt="">
<ul>
<li>storage ${phone.mainFeatures.storage}</li>
<li>memory  ${phone.mainFeatures.memory}</li>
<li>display Size </li>
<li>chipSet </li>
<li>Bluetooth </li>
</ul>
`
}
loadPnone('apple')