import React from 'react';

const BookCard = ({ book, addBookToShelf }) => {
    return (
        <div className="book-card">
            <h3><span>Title- </span>{book.title}</h3>
            <p><span>Author- </span>{book.author_name && book.author_name.join(', ')}</p>
            <button onClick={() => addBookToShelf(book)}>Add to Bookshelf</button>
        </div>
    );
};

export default BookCard;