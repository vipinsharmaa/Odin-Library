class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.myLibrary = [];
        this.tiles = document.querySelector(".tiles");
        this.addBookButton = document.querySelector('button#addBook');
        this.dialog = document.querySelector("dialog");
        this.form = document.querySelector("#bookForm");

        // Initialize event listeners
        this.addBookButton.addEventListener("click", () => this.showDialog());
        this.form.addEventListener("submit", (e) => this.handleFormSubmit(e));
    }

    // Show modal for adding a new book
    showDialog() {
        this.dialog.showModal();
    }

    // Handle form submission to add a new book
    handleFormSubmit(e) {
        e.preventDefault();

        let title = document.querySelector("#title").value;
        let author = document.querySelector("#author").value;
        let pages = document.querySelector("#numOfPages").value;
        let read = document.querySelector("#read").checked;

        // Create a new book and add it to the library
        const newBook = new Book(title, author, pages, read);
        this.addBook(newBook);

        this.form.reset();
        this.dialog.close();
    }

    // Add a new book to the library
    addBook(book) {
        this.myLibrary.push(book);
        this.displayBooks();
    }

    // Display all books in the library
    displayBooks() {
        this.tiles.innerHTML = '';  
        this.myLibrary.forEach((book, i) => {
            const bookElement = document.createElement("div");
            bookElement.classList.add('book');
            bookElement.innerHTML = `
            <div class="book-info" data-index=${i}>
                <h3>Title:</h3><span class="title">${book.title}</span>
                <h3>Author:</h3><span class="author">${book.author}</span>
                <h3>Pages:</h3><span class="pages">${book.pages}</span>
                <h3>Status:</h3><button class="read">${book.read ? "Read" : "Unread"}</button>
            </div>
            <button type="button" class="deleteBook">Delete</button>
            `;
            this.tiles.appendChild(bookElement);

            // Add event listeners for each book
            this.addToggleReadListener(bookElement, i);
            this.addDeleteBookListener(bookElement, i);
        });
    }

    // Toggle the read status of a book
    addToggleReadListener(bookElement, index) {
        const readButton = bookElement.querySelector(".read");
        readButton.addEventListener("click", () => {
            this.myLibrary[index].read = !this.myLibrary[index].read;
            this.displayBooks();  
        });
    }

    // Delete a book from the library
    addDeleteBookListener(bookElement, index) {
        const deleteButton = bookElement.querySelector(".deleteBook");
        deleteButton.addEventListener("click", () => {
            this.myLibrary.splice(index, 1);  
            this.displayBooks();  
        });
    }
}

// Initialize the Library object
const myLibraryApp = new Library();
