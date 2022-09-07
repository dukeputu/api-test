/* 
//https://api.kanye.rest/
const loadQuote = ()=>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(quote=>displayQuote(quote))
}

const displayQuote = (quote)=>{
    const blockQute=document.getElementById('quote');

    blockQute.innerText = quote.quote;

} */

const loadUser = () => {
    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(users => displayUser(users.results))
}

const displayUser = (a) => {
    console.log(a);
    const usresContener = document.querySelector('#users-container');
    for (const user of a) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML = `
        <h3> User Name :- ${user.name.first}  &nbsp; ${user.name.last}</h3>
        <p>${user.gender}</p>
        <p>${user.location.country}</p>
                                `;
        usresContener.appendChild(userDiv)
    }

}
loadUser()