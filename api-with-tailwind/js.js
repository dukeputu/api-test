const loadAllProduct = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
}


const setAllMenu = async () => {
    //    console.log(loadAllProduct());
    //    loadAllProduct()
    //    .then(data=>console.log(data));

    const data = await loadAllProduct();
    // console.log(data);
    const menu = document.getElementById('menu');

    const uniqueArray = [];

    for (const products of data) {
        // console.log(products.category);
        if (uniqueArray.indexOf(products.category) === -1) {
            uniqueArray.push(products.category);
            const li = document.createElement('li');
            li.classList.add('li');
            li.innerHTML = ` <span onclick="liToScerch(this.innerText)">${products.category}</span>`
            menu.appendChild(li);

        }
    }


}

const liToScerch = async (li) => {
    console.log(li);
    const searchValue = li;
    const allProducta = await loadAllProduct();

    const foundProducta = allProducta.filter(product => product.category.includes(searchValue));
    console.log(foundProducta);
    const productsContainer = document.getElementById('product-list');

    foundProducta.forEach(product => {
        console.log(product);
        const { image, title, description } = product;
        const div = document.createElement('div');

        div.innerHTML = `
                <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="${image}" alt="${title}" class="h-60 w-full" /></figure>
                <div class="card-body">
                    <h2 class="card-title">${title.length > 10 ? title.slice(0, 10) : title}</h2>
                    <p>${description.length > 20 ? description.slice(0, 20) + '...' : description}</p>
                    <div class="card-actions justify-end">
                            <label for="my-modal-4" class="btn modal-button btn-primary" 
                            onclick="showModals('${description}', '${image}','${title}')">Bay Now</label>
                    </div>
                </div>
                </div>
                `
        productsContainer.appendChild(div);

    });
}

const searchField = document.getElementById('search-field');

searchField.addEventListener('keypress', async (event) => {

    const progress = document.getElementById('search-progress');
    progress.classList.remove('hidden');

    if (event.key === 'Enter') {
        // console.log(event.key);
        const searchValue = searchField.value;

        // console.log(searchValue);
        const allProducta = await loadAllProduct();

        progress.classList.add('hidden');
        // console.log(allProducta);
        const foundProducta = allProducta.filter(product => product.category.includes(searchValue));
        // console.log(foundProducta);

        const productsContainer = document.getElementById('product-list');
        const notFound = document.getElementById('no-results');
        productsContainer.textContent = '';
        notFound.textContent = '';

        if (foundProducta.length === 0) {
            // console.log('foundP roducta');
            notFound.innerHTML = `<h2 class="not-found text-orange-600 text-center text-[50px] ">Not Found</h2>`
            return;
        }
        foundProducta.forEach(product => {
            // console.log(product);
            const { category, image, title, description } = product;
            const div = document.createElement('div');

            div.innerHTML = `
                    <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="${image}" alt="${title}" class="h-60 w-full" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">${title.length > 10 ? title.slice(0, 10) : title}</h2>
                        <p>${description.length > 20 ? description.slice(0, 20) + '...' : description}</p>
                        <div class="card-actions justify-end">
                                <label for="my-modal-4" class="btn modal-button btn-primary" 
                                onclick="showModals('${description}', '${image}','${title}')">Bay Now</label>
                        </div>
                    </div>
                    </div>
                    `
            productsContainer.appendChild(div);

        });
    }
})

const showModals = (description, image, title) => {
    // console.log(description, image);
    const modalBody = document.getElementById('modal-body');
    modalBody.textContent = '';
    modalBody.innerHTML = `
<img src="${image}" alt="${title}" class="h-60 w-full" />
<small>${title}</small>
<p>${description}</p>
`

}

setAllMenu()
// loadAllProduct()
