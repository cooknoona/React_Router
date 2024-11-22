import React from "react";
import { Link, useSearchParams } from "react-router-dom";
// 쿼리 스트링 : URL의 뒷부분에 붙여서 전달하는 유동적인 데이터? 키=값&키=값

const About = () => {
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  // 쿼리스트링에서 정보 가져오기
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  // datail 값을 토글하는 함수
  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };

  // mode 값을 증가시키는 함수
  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>여기는 About 페이지 입니다.</h1>
      <p>정보 페이지 입니다.</p>
      <Link to="/home">홈으로 이동</Link>
      {/* URL주소 칸에 About?key=value&key=value 형식으로 이어지는걸 출력함 */}
      {/* <p>쿼리스트링 : {location.search}</p> */}
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>토글 디테일</button>
      <button onClick={onIncreaseMode}>모드 + 1</button>
    </div>
  );
};

export default About;
