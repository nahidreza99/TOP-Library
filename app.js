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
    return book;
}

let sample = new Book("A Game Of Thrones 1", "George R. R. Martin", "Fiction", "July 1 1996", "694");
myLibrary.push(sample);
myLibrary.push(new Book("A Game Of Thrones 2", "George R. R. Martin", "Fiction", "July 1 1996", "694"));
myLibrary.push(new Book("A Game Of Bones 3", "George R. R. Martin", "Fiction", "July 1 1996", "694"));
myLibrary.push(new Book("A Game Of Thrones 4", "George R. R. Martin", "Fiction", "July 1 1996", "694"));
myLibrary.push(new Book("A Game Of Thrones 5", "George R. R. Martin", "Fiction", "July 1 1996", "694"));
myLibrary.push(new Book("A Game Of Thrones 6", "George R. R. Martin", "Fiction", "July 1 1996", "694"));

const readIcon = '<i class="fa-solid fa-circle-check"></i>'
const rmvIcon = '<i class="fa-solid fa-trash-can"></i>'
let newBook = document.getElementById('add');

function renderAddButton(){
    const addBtn = document.createElement("div");
    addBtn.classList.add("add");
    addBtn.classList.add("card");
    addBtn.id = 'add';
    addBtn.innerHTML = '<i class="fa-solid fa-circle-plus"></i>'
    document.getElementById("container").appendChild(addBtn);
    newBook = document.getElementById('add');
    
}

function showBooks(){
    for (const b of myLibrary){
        const node = document.createElement("div");
        node.classList.add("card");
        node.innerHTML += '<p class="title">'+b.title+'</p>';
        node.innerHTML += '<div class="author">'+'Author: '+b.author+'</div>';
        node.innerHTML += '<div class="category">'+'Category: '+b.category+'</div>';
        node.innerHTML += '<div class="published">'+'Published: '+b.published+'</div>';
        node.innerHTML += '<div class="pages">'+'Pages: '+b.page+'</div>';
        node.innerHTML += '<p class="controls">'+'<span class="read">'+readIcon+'</span>'+' | '+'<span class="trash">'+rmvIcon+'</span>'
        document.getElementById("container").appendChild(node);
    }
}

showBooks();
renderAddButton();
const curtain = document.getElementById('curtain');

function newEntry(){
    const form = document.getElementById('form');
    form.innerHTML = '<label for="title">Title: <input id="title" type="text"></label><br><label for="author">Author: <input id="author" type="text"></label><br><label for="category">Category: <input id="category" type="text"></label><br><label for="published">Published: <input id="published" type="date"></label><br><label for="page">Pages: <input id="page" type="number"></label><br><input id="submit" type="submit">'
}

let entryDialog = false;

newBook.onclick = function(){
    console.log('new book');
    curtain.classList.add("curt");
    document.getElementById('form').classList.remove('behind');
    document.getElementById('form').classList.add('front');
    newEntry();
}

function removeEntryDialog(){
    document.getElementById('form').innerHTML = '';
    document.getElementById('form').classList.remove('front');
    document.getElementById('form').classList.add('behind');
    curtain.classList.remove('curt');
}

function renderNewBook(book){
    const container = document.getElementById("container");
    const node = document.createElement("div");
    node.classList.add("card");
    node.innerHTML += '<p class="title">'+book.title+'</p>';
    node.innerHTML += '<div class="author">'+'Author: '+book.author+'</div>';
    node.innerHTML += '<div class="category">'+'Category: '+book.category+'</div>';
    node.innerHTML += '<div class="published">'+'Published: '+book.published+'</div>';
    node.innerHTML += '<div class="pages">'+'Pages: '+book.page+'</div>';
    node.innerHTML += '<p class="controls">'+'<span class="read">'+readIcon+'</span>'+' | '+'<span class="trash">'+rmvIcon+'</span>'
    container.insertBefore(node,container.lastChild);
}

function getNewBook(){
    const t = document.getElementById('title').value;
    const a = document.getElementById('author').value;
    const c = document.getElementById('category').value;
    const d = document.getElementById('published').value;
    const p = document.getElementById('page').value;
    let book = addBookToLibrary(t,a,c,d,p);
    renderNewBook(book);
    return;
}

function reset(){
    readBtn = document.getElementsByClassName('read');
    trashBtn = document.getElementsByClassName('trash');
    enableTrashButton();
    enableReadButton();
}

document.getElementById('form').addEventListener('submit', function (evt) {
    console.log('working');
    getNewBook();
    removeEntryDialog();
    reset();
    evt.preventDefault();
});

let readBtn = document.getElementsByClassName('read');
let trashBtn = document.getElementsByClassName('trash');

function enableReadButton(){
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
}

function enableTrashButton(){
    for(let x=0;x<trashBtn.length;x++){
        trashBtn[x].onclick = function(){
            myLibrary.splice(x,1);
            removeItem(document.getElementsByClassName('card')[x]);
        }
    }
}

function removeItem(node){
    document.getElementById('container').removeChild(node);
    reset();
}

enableTrashButton();
enableReadButton();