import "./App.css";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/articles" element={<ArticleList />}></Route>
      </Routes>
    </>
  );
}

export default App;
