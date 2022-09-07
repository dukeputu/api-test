const loadMeals=(name)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals=(meals)=>{
    
    const mealsContainer =document.getElementById('meal-container');
    mealsContainer.innerText='';
    meals.forEach(data =>{
        console.log(data)

        const{strMeal, strInstructions,strMealThumb,idMeal}=data;
        const cardDiv=document.createElement('div');
        cardDiv.classList.add("card","w-96","bg-base-100","shadow-xl");
        cardDiv.innerHTML= `
        <div ">
        <figure><img src="${strMealThumb}" alt="Shoes" /></figure>
        <div class="card-body">
                <h2 class="card-title">${strMeal}</h2>
                <p>${strInstructions.length >20 ? strInstructions.slice(0,50)+'...' : strInstructions}</p>
                <div class="card-actions justify-end">
                <label for="my-modal-4" class="btn modal-button btn-primary" 
                onclick="onclick="loadMealDetail(${idMeal})">Bay Now</label>
                </div>
        </div>
        </div>
        `
        mealsContainer.appendChild(cardDiv);
    });
}

const searchFood=()=>{
    const sarchField=document.getElementById('search-field');
    const searchText = sarchField.value;
     loadMeals(searchText)
    // searchField.textContent='';
    sarchField.value='';
    console.log('searchText', searchText);
}

const loadMealDetail=(idMeal)=>{
// console.log('displayMealDetail', idMeal);

const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
fetch(url)
.then(res=> res.json())
.then(data=>displayModal(data.meals[0]))
}

const displayModal=(meal)=>{
const modalBody= document.getElementById('modal-body')
modalBody.textContent = '';
modalBody.innerHTML = `
<img src="${meal.strMealThumb}" alt="$" class="h-60 w-full" />
<small>${meal.strMeal}</small>
<p>${meal.strInstructions}</p>
`
}



loadMeals('rice')