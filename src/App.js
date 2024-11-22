import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Login from "./pages/Login";
import Layout from "./styles/Layout";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          {/* Layout은 공용이므로 로그인을 제외한 다른 페이지를 중첩라우터를 활용해 묶어준다 */}
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/profile/:userName" element={<Profile />}></Route>
            <Route path="/articles" element={<Articles />}></Route>
            <Route path="/article/:id" element={<Article />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
