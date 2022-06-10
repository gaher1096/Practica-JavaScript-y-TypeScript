"use strict";
const book = {
    id: 0,
    tittle: "La cupla es de la vaca",
    author: "anonimo"
};
const books = [];
function getBook() {
    return { id: 1, tittle: "Mi libro", author: "Dross" };
}
const myBook = getBook();
function createBook(book) {
    return book;
}
const newBook = {
    id: 1,
    tittle: "Mi libro",
    author: "Dross"
};
createBook(newBook);
