import "./App.css";
import Article from "./components/Article";
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
        <Route path="/articles/:article_id" element={<Article />}></Route>
      </Routes>
    </>
  );
}

export default App;
