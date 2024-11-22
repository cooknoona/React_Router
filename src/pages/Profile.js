import { React } from "react";
import { useParams } from "react-router-dom";

const data = {
  frontEnd: {
    name: "홍길동",
    description: "리액트 개발자",
  },
  backEnd: {
    name: "이성계",
    description: "스프링부트 개발자",
  },
  dba: {
    name: "이방원",
    description: "오라클 개발자",
  },
};

const Profile = () => {
  const params = useParams(); // Router로 이동시 필요
  const profile = data[params.userName];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필 입니다.</p>
      )}
    </div>
  );
};

export default Profile;
