import React from "react";
import { Link } from "react-router-dom";

const MyBookShelf = () => {
  const books = JSON.parse(localStorage.getItem("bookshelf")) || [];
  return (
    <div className="bookshelf-container">
      <div className="bookshelfNav">
        <h2 className>My Bookshelf</h2>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
      <div className="bookCard">
        {books.map((book) => (
          <div key={book.key} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author_name && book.author_name.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookShelf;
