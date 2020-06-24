import axios from "axios";

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  updateBook: function (id, bookData) {
    return axios.put("/api/books/" + id, bookData);
  },
  // Gets all authors
  getAuthors: function () {
    return axios.get("/api/authors");
  },
  // Gets the author with the given id
  getAuthor: function (id) {
    return axios.get("/api/authors/" + id);
  },
  // Deletes the author with the given id
  deleteAuthor: function (id) {
    return axios.delete("/api/authors/" + id);
  },
  // Saves a author to the database
  saveAuthor: function (authorData) {
    return axios.post("/api/authors", authorData);
  },
  updateAuthor: function (id, authorData) {
    return axios.put("/api/authors/" + id, authorData);
  }
};
