import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import Spinner from "../components/Spinner";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem("bookshelf")) || []
  );

  const addBookToShelf = useCallback(
    (book) => {
      const updatedBookshelf = [...bookshelf, book];
      setBookshelf(updatedBookshelf);
      localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
    },
    [bookshelf]
  );

  const handleSearch = async (value) => {
    setLoading(true);
    setQuery(value);
    if (value) {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${value}&limit=10&page=1`
      );
      const data = await response.json();
      setData(data.docs);
    } else {
      setData([]);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>BookShelf App</h1>
      <div className="navBar">
        <div className="input">
          <input
            className="input-box"
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search for books"
          />
        </div>
        <div className="bookShelf">
          <Link to="/myBookShelf">
            <button>My Bookshelf</button>
          </Link>
        </div>
      </div>
      {loading && <Spinner />}
      <div className="bookCard">
        {data.length === 0 && !loading && <div className="no-data">No books are available</div>}
        {data.length > 0 && (
          <>
            {data.map((book) => (
              <BookCard
                key={book.key}
                book={book}
                addBookToShelf={addBookToShelf}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
