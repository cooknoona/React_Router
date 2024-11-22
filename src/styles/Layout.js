import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background-color: lightgray;
  padding: 16px;
  font-size: 24px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  background-color: royalblue;
  color: white;
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  height: calc(100vh - 200px);
`;

const Layout = () => {
  return (
    <>
      <Header>헤더 영역입니다</Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>풋터 영역입니다.</Footer>
    </>
  );
};

export default Layout;
