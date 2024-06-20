const addBook = document.querySelector('button#addBook');
const dialog = document.querySelector("dialog");

addBook.addEventListener("click", () => {
    dialog.showModal();
});


const myLibrary = [];

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

function addBookToLibrary() {

}