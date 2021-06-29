let myLibrary = [];

class Book {
    constructor(title = "undefined", author = "undefined", pages = 0, isRead = false) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    };
}

function addBookToLibrary() {
    let newBook = Book(addBook());
    myLibrary.push(newBook);
}

function removeFromLibrary() {

}

function addBook() {

}

function changeStatus() {

}

/*
books stored in an array - myLibrary
constructor to create books
add book to library - adds the book to the array
loop the array and display all of them on the page ( maybe using a card)
button that shows a form to add a book, with author, pages, read, title
add a button to remove books
button to change its read status
- if i want i can do a type of storage data
- add information tab - books read, number of books etc
- read can only be true or false so add a span
*/


