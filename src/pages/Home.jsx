import React, { useState } from "react";
import Header from "../components/Header";
import Content from "../components/Content";

const Home = () => {
  const [dataContent, setDataContent] = useState(false);
  const sendDataToHome = (data) => {
    console.log("Dữ liệu từ component con1:", data);
    setDataContent(data);
    // Xử lý dữ liệu từ component con ở đây
  };

  const handleDataFromData = (data) => {
    sendDataToHome(data);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "wheat",
        }}
      >
        <Header sendDataToHome={handleDataFromData} />
        <Content dataContent={dataContent} />
      </div>
    </div>
  );
};

export default Home;
