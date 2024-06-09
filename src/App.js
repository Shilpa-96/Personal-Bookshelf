import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import MyBookShelf from "./pages/MyBookShelf";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/myBookShelf" element={<MyBookShelf />} />
      </Routes>
    </div>
  );
}

export default App;
