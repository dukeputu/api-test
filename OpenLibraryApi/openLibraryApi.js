const scarchBook=()=>{
    fetch('http://openlibrary.org/search.json?q=the+lord+of+the+rings')
    .then(res => res.json())
    .then(book => console.log(book))
}

const displaySearchResult =(book)=>{

}


scarchBook()