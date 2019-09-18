
let url = "https://api.myjson.com/bins/zyv02 ";
fetch(url).then(function (response) {
    if (response.ok) {
        return response.json()
    }
    throw new Error(reponse.statusText);
}).then(function (json) {

    books = json.books;
    console.log(books);


    //functions->

    booksCatalog = document.getElementById("catalog");
    
    getValue();
    titleArrayFunction = bookTitles(books);
    creatCatalog(books)



}).catch(function (error) {

});

let spinner1 = document.getElementById("myDIV");
spinner1.classList.remove("spinner-border");

let loadingBackground = document.getElementById("loadingBackground");
loadingBackground.classList.remove("page-container-1");




let books = [];
let booksCatalog = 0;
let searchInput = 0;
let text = [];
let titleArrayFunction = 0;
let titleArray = [];

//1
function creatCatalog(array) {
    let x = [];
    for (let i = 0; i < array.length; i++) {
        x = x +
            `
        <div class="card-container col-md-2.1">
            <div class="card card-front">
                <img src="${array[i].cover}" class="card-img-top" alt="${array[i].title} Book Cover">
            </div>

            <div class="card card-back">
                <div class="card-body bg-info">
                    <h2>${array[i].title}</h2>
                    <div class="pre-scrollable description">
                        <h5>${array[i].description}</h5>
                    </div>
                    <a href="${array[i].detail}" class="btn btn-success" data-fancybox = "group" data-caption="${array[i].title}">Read More</a>
                </div>
            </div>
        </div>
        `;
    }
    booksCatalog.innerHTML = x;
}
//2
function getValue() {
    $( "#search-input" ).keydown(function() {
        let finalArray = [];
        var matched_terms = [];
        var search_term =document.getElementById('search-input').value;
        search_term = search_term.toLowerCase();
        titleArray.forEach(item => {
            if (item.toLowerCase().indexOf(search_term) !== -1) {
                matched_terms.push(item);
                console.log(matched_terms);
                
                
                for (let i = 0; i < books.length; i++){
                    if (books[i].title.startsWith(item)){
                        finalArray.push(books[i]);
                        console.log(finalArray);
                        
                    }
                }   
            }
        });
        creatCatalog(finalArray);
    });
}
//3
function bookTitles(array) {
    for (let i = 0; i < array.length; i++) {
        titleArray.push(array[i].title);
    }
}