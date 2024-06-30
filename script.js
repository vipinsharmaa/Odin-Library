function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const myLibrary = [];

const addBook = document.querySelector('button#addBook');
const dialog = document.querySelector("dialog");
const form = document.querySelector("#bookForm");
const tiles = document.querySelector(".tiles");

// show addbook modal
addBook.addEventListener("click", () => {
    dialog.showModal();
});

// Add book to Library
function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#numOfPages").value;
    let read = document.querySelector("#read").checked;

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

}

// Form Submission handler
form.addEventListener("submit", function (e) {
    e.preventDefault();
    addBookToLibrary();
    form.reset();
    dialog.close();
    displayBook();
})


// Display Books
function displayBook() {
    tiles.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        const book = document.createElement("div");
        book.classList.add('book');
        book.innerHTML = `
        <div class="book" data-index=${i}>
            <div class="book-info">
                <h3>Title:</h3><span class="title">${myLibrary[i].title}</span>
                <h3>Author:</h3> <span class="author">${myLibrary[i].author}</span>
                <h3>Pages:</h3> <span class="pages">${myLibrary[i].pages}</span>
                <h3>Status:</h3> <button class="read">${myLibrary[i].read ? "Read" : "Unread"}</button>
            </div>
            <button type="button" class="deleteBook">Delete</button>
        </div>
        `;

        // toggle read status
        book.querySelector(".read").addEventListener("click", () => {
            myLibrary[i].read = !myLibrary[i].read;
            displayBook();
        });

        // Delete Book
        book.querySelector(".deleteBook").addEventListener("click", () => {
            myLibrary.splice(i, 1);
            displayBook();
        });

        tiles.appendChild(book);
    }

}
