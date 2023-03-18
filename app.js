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

function showBooks(){
    for (const b of myLibrary){
        const node = document.createElement("div");
        node.classList.add("card");
        node.innerHTML += '<div class="title">'+b.title+'</div>';
        node.innerHTML += '<div class="author">'+'Author: '+b.author+'</div>';
        node.innerHTML += '<div class="category">'+'Category: '+b.category+'</div>';
        node.innerHTML += '<div class="published">'+'Published: '+b.published+'</div>';
        node.innerHTML += '<div class="pages">'+'Pages: '+b.page+'</div>';
        document.getElementById("container").appendChild(node);
    }
}
showBooks();
