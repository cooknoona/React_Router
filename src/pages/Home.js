import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserStore";
import { useContext } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.color};
`;

const Home = () => {
  const { userId, password, color } = useContext(UserContext);
  return (
    <Container color={color}>
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
      <br />
      <Link to="/setting">세팅으로</Link>
      <br />
      <Link to="/imageUploader">이미지</Link>

      <p>아이디: {userId}</p>
      <p>비밀번호: {password}</p>
    </Container>
  );
};

export default Home;
