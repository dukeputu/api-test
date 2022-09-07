/* const Person = {
    name: 'abul',
    age: 23,
    contact: {
        phone: '09432723',
        email: "abul@gmail.com"
    },
    education: {
        schoolName: "andorkilla high school",
        subjects: [
            { name: 'bangla', mark: 45 },
            { name: 'english', mark: 64 },
            { name: 'math', mark: 74 }
        ]
    }
}

// console.log(Person.education.subjects[1].name );

const petOwner = {
    name: 'Hero Alom',
    contact: {
        phone: "09376253",
        email: "xyz@gmail.com"
    },
    cat: {
        name: 'Lofie',
        info: {
            color: 'black',
            weight: '1.2kg'
        }
    }
};

// console.log(petOwner.cat?.info.color)

// arrow function and default parameters



// const add = (x, y) => x * 2;
// const add = (x, y) => {
//     return x + y;
// };
const add = (x = 4, y = 1) => {
    return x + y;
};



// console.log(run(5))
// console.log(add(5, 4));
// console.log(add(8, 7));

// const square = x => x * x
const square = x => {
    const result = x.map(item => item ** 2)
    return result;
}

// 2^2 =4

// 2*2 = 4

const x = [2, 3, 4]

console.log(square(x));
 */

/* const user = {id:1,name: 'John',email: 'james@gmail.com'};

const jsStringfy = JSON.stringify(user);
console.log( jsStringfy )

const jsonParse = JSON.parse(jsStringfy);
console.log( jsonParse ) */

/* fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json()) // . json is not similar but close to JSON.parse

.then(json => console.log(json)) */

/* const url = 'https://jsonplaceholder.typicode.com/todos/2';
fetch(url)
.then(res => res.json())
.then(json => console.log(json)) */

/* const loadData= () =>{
    const url = 'https://jsonplaceholder.typicode.com/todos/2';
    fetch(url)
    .then(res => res.json())
    .then(json => console.log(json))
} */

/* const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = (data) => {
    const ul = document.getElementById('users-list')

    for (const datas of data) {
        console.log(datas);
        const li = document.createElement('li')
        li.innerText = `
       name:-  ${datas.name}    email:- ${datas.email};
        ` 
        ul.appendChild(li);
    }
} */

/* const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(res => res.json())
        .then(post => displayPost(post))
}

const displayPost = (post) => {
    const postContainer = document.getElementById('posts-container');
    for (const posts of post) {
        // console.log(posts);
        const div = document.createElement('div');
        // div.classList.add('style');
        div.innerHTML = `
      <div class="bg-red-300 rounded-md p-8">
      <h5>users ID:-  ${posts.userId}</h5>
      <h4>Post Title:-  ${posts.title}</h4>
      <p> Post Body:- ${posts.body}</p></div>
       `
        postContainer.appendChild(div);
    }

}
loadPost() */

 