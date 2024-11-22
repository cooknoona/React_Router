import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, StyledInput, StyledButton } from "../styles/CommonStyle";

const Login = () => {
  // 키보드 입력에 대한 상태 관리
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 간단한 유효성 검사
  const [isId, setIsId] = useState("");
  const [isPw, setIsPw] = useState("");

  const navigate = useNavigate(); // 페이지 이동을 위한 객체 생성

  const onChangeId = (e) => {
    setInputId(e.target.value);
    e.target.value.length >= 5 ? setIsId(true) : setIsId(false);
  };

  const onChangePw = (e) => {
    setInputPw(e.target.value);
    e.target.value.length >= 5 ? setIsPw(true) : setIsPw(false);
  };

  const onClickLogin = () => {
    // 이 구간에서 Axios 비동기 통신 호출
    // 그리고 결과 수신
    // 결과값 확인
    if (inputId === "cook961004" && inputPw === "hi123123") {
      navigate("/home");
    } else {
      alert("아이디 또는 패스워드가 틀립니다.");
    }
  };

  return (
    <Container>
      <StyledInput value={inputId} placeholder="ID 입력" onChange={onChangeId} />
      <br />
      <StyledInput value={inputPw} placeholder="PW 입력" onChange={onChangePw} />
      <br />
      {isId && isPw ? (
        <StyledButton onClick={onClickLogin}>확인</StyledButton>
      ) : (
        <StyledButton disabled onClick={onClickLogin}>
          확인
        </StyledButton>
      )}
    </Container>
  );
};

export default Login;
