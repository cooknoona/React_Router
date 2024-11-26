import React, { useState } from "react";
import { storage } from "../api/firebase";

const ImageUploader = () => {
  const [file, setFile] = useState(null); //업로드 할 파일
  const [url, setUrl] = useState(""); // 업로드 후 파이어베이스 URL 경로

  // 업로드 할 파일 선택
  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  // 업로드 버튼 클릭
  const handleUploadClick = () => {
    if (!file) {
      alert("파일을 먼저 선택 하세요!");
      return;
    }
    // Firebase Storage 참조
    const storageRef = storage.ref();
    // 파일 저장 위치 지정
    const fileRef = storageRef.child(file.name);
    fileRef
      .put(file) // Async 부분에 해당하고
      .then(() => {
        // await 부분에 해당하는 비동기 통신
        console.log("파일 업로드 성공!");
        return fileRef.getDownloadURL(); // 업로드된 파일의 URL을 가져옴
      })
      .then((downloadUrl) => {
        console.log("저장된 URL경로", downloadUrl);
        setUrl(downloadUrl);
      })
      .catch((error) => {
        console.log("업로드중 에러 발생!", error);
      });
  };
  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleUploadClick}>업로드</button>
      {url && <img src={url} alt="파일 없음" />}
    </div>
  );
};

export default ImageUploader;
