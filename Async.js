
//Fetch API:
const ul = document.getElementById("authors");
const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
.then((response)=>{return response.json(); })
.then((data)=>{
    let authors = data;
    console.log(authors);
})


