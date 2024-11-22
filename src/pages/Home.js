import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>여기는 Home 페이지 입니다.</h1>
      <p>메인 페이지 입니다.</p>
      <Link to="/about">소개페이지 입니다.</Link>
      <br />
      <Link to="/profile/frontEnd">Front End Profile</Link>
      <br />
      <Link to="/profile/backEnd">Back End Profile</Link>
      <br />
      <Link to="/profile/dba">DBA Profile</Link>
      <br />
      <Link to="/articles">게시판 목록</Link>
    </div>
  );
};

export default Home;
