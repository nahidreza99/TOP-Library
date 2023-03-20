let myLibrary = [];

function Book(title, author, category, published, page){
    this.title = title;
    this.author = author;
    this.category = category;
    this.published = published;
    this.page = page;
}

function addBookToLibrary(title, author, category, published, page){
    let book = new Book(title, author, category, published, page);
    myLibrary.push(book);
}

let sample = new Book("A Game Of Thrones", "George R. R. Martin", "Fiction", "July 1 1996", "694");
myLibrary.push(sample);
myLibrary.push(new Book("A Game Of Thrones", "George R. R. Martin", "Fiction", "July 1 1996", "694"));
myLibrary.push(new Book("A Game Of Thrones", "George R. R. Martin", "Fiction", "July 1 1996", "694"));
myLibrary.push(new Book("A Game Of Thrones", "George R. R. Martin", "Fiction", "July 1 1996", "694"));
myLibrary.push(new Book("A Game Of Thrones", "George R. R. Martin", "Fiction", "July 1 1996", "694"));
myLibrary.push(new Book("A Game Of Thrones", "George R. R. Martin", "Fiction", "July 1 1996", "694"));

const readIcon = '<i class="fa-solid fa-circle-check"></i>'


function showBooks(){
    for (const b of myLibrary){
        const node = document.createElement("div");
        node.classList.add("card");
        node.innerHTML += '<p class="title">'+'<span class="read">'+readIcon+'</span>'+'<span>'+b.title+'</span>'+'</p>';
        node.innerHTML += '<div class="author">'+'Author: '+b.author+'</div>';
        node.innerHTML += '<div class="category">'+'Category: '+b.category+'</div>';
        node.innerHTML += '<div class="published">'+'Published: '+b.published+'</div>';
        node.innerHTML += '<div class="pages">'+'Pages: '+b.page+'</div>';
        document.getElementById("container").appendChild(node);
    }
    const addBtn = document.createElement("div");
    addBtn.classList.add("add");
    addBtn.classList.add("card");
    addBtn.id = 'add';
    addBtn.innerHTML = '<i class="fa-solid fa-circle-plus"></i>'
    document.getElementById("container").appendChild(addBtn);

}
showBooks();
const curtain = document.getElementById('curtain');

function newEntry(){
    const form = document.getElementById('form');
    form.innerHTML = '<label for="title">Title: <input id="title" type="text"></label><br><label for="author">Author: <input id="author" type="text"></label><br><label for="category">Category: <input id="category" type="text"></label><br><label for="published">Published: <input id="published" type="date"></label><br><label for="page">Pages: <input id="page" type="number"></label><br><input id="submit" type="submit">'
}

let entryDialog = false;
const newBook = document.getElementById('add');
newBook.onclick = function(){
    curtain.classList.add("curt");
    document.getElementById('form').classList.remove('behind');
    document.getElementById('form').classList.add('front');
    newEntry();
}

function removeEntryDialog(){
    const entryChild = document.getElementById('entry');
    curtain.removeChild(entryChild);
}

//const submit = document.getElementById('submit');
    document.getElementById('form').addEventListener('submit', function (evt) {
        console.log('working');
        evt.preventDefault();
    });

let readBtn = document.getElementsByClassName('read');



for(let x=0;x<readBtn.length;x++){
    readBtn[x].onclick = function(){
        readBtn[x].classList.toggle('green');
        if(readBtn[x].classList.contains('green')){
            readBtn[x].style.setProperty('color', 'green');
        }
        else{
            readBtn[x].style.setProperty('color', 'rgb(195, 198, 214)')
        }
    }
}