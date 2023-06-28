import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
const Home = () => {
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
        }}
      >
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default Home;
