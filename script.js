
const myLibrary = [];
const addBook = document.querySelector('button#addBook');
const dialog = document.querySelector("dialog");
const tiles = document.querySelector(".tiles");
const inputs = document.querySelectorAll('input');

const form = document.querySelector("#bookForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const titleInput = form.elements.title;
    const authorInput = form.elements.author;
    const numOfPagesInput = form.elements.numOfPages;
    const readYetInput = form.elements.readYet;
    addBookToLibrary(titleInput.value, authorInput.value, numOfPagesInput.value, readYetInput.value);
    titleInput.value = '';
    authorInput.value = '';
    numOfPagesInput.value = '';
    readYetInput.value = '';
    dialog.close();
    console.log(myLibrary);

});


addBook.addEventListener("click", () => {
    dialog.showModal();
});



// constructor 
function Book(title, author, numOfPages, readYet) {
    this.title = title,
        this.author = author,
        this.numOfPages = numOfPages,
        this.readYet = readYet,
        this.info = function () {
            return `${this.title} by ${this.author}, ${this.numOfPages} pages, ${readYet}`;
        }
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBook(title, author, pages, read);
}

function displayBook(title, author, pages, read) {
    const newBook = document.createElement('div');
    const titleTag = document.createElement('p');
    const authorTag = document.createElement('p');
    const pagesTag = document.createElement('p');
    const readTag = document.createElement('p');
    titleTag.append(`Title: ${title}`);
    authorTag.append(author);
    pagesTag.append(pages);
    readTag.append(read);
    newBook.append(titleTag);
    newBook.append(authorTag);
    newBook.append(pagesTag);
    newBook.append(readTag);
    tiles.append(newBook);
}