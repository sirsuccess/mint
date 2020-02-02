import React, { useState } from "react";
import styled from "styled-components";
import "./Dashboard.css";
import Navbar from "../../components/features/navbar/Navbar";
import Sidebar from "../../components/features/sidebar/Sidebar";
import DashboardBody from "../../components/features/dashboardBody/DashboardBody";

function App() {
  const [open, setOpen] = useState(false);

  const handleclose = () => {
    if (open) {
      return setOpen(!open);
    }
  };

  const handleOpen = () => {
    return setOpen(!open);
  };
  return (
    <>
      <Navbar onClick={handleclose} />
      <Container className="App">
        <ContentArea className="dashboardBody" onClick={handleclose}>
          <Side className={open ? "open" : ""}>
            <Sidebar />
          </Side>
          <Handburger onClick={handleOpen} className={open ? "top" : ""}>
            <Line className={`${open ? "line-color line1" : ""} `} />
            <Line className={`${open ? "line-color line2" : ""} `} />
            <Line className={`${open ? "line-color line3" : ""} `} />
          </Handburger>
          <div className="dashboadRight">
            <DashboardBody />
          </div>
        </ContentArea>
      </Container>
    </>
  );
}

export default App;
const Container = styled.div`
  position: relative;
  .open {
    transition: left 0.5s;
    left: 0;
    z-index: 0.5;
    position: absolute;
  }
`;
const ContentArea = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 4.5em;
  position: relative;
  @media screen and (max-width: 750px) {
    margin-top: 1.5em;
    padding: 1em;
  }

  .top {
    z-index: 999999;
  }
`;

const Side = styled.div`
  width: 270px;
  z-index: 2;
  @media screen and (max-width: 750px) {
  background-color: #fff;
    position: fixed;
    left: -280px;
    transition: left 0.7s;
    width: 200px;
    color: #fff
    z-index: 999999;
    margin-left: -50px;
  }
`;

const Handburger = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 100%;
  background-color: #fff;
  position: fixed;
  @media screen and (min-width: 751px) {
    display: none;
  }
  background: transparent;
  cursor: pointer;
  .top {
    z-index: 999999;
    // position: relative;
  }
  .line-color {
    z-index: 999999;
    background-color: white;
    color: #000;
  }
  .line1 {
    transform: rotate(45deg);
    top: 0;
    position: absolute;
    background-color: #000;
  }
  .line2 {
    display: none;
    color: #000;
  }
  .line3 {
    transform: rotate(-45deg);
    top: 0;
    position: absolute;
    background-color: #000;
  }
`;

const Line = styled.div`
  width: 25px;
  height: 3px;
  border-radius: 5px;
  background-color: #000;
  margin: 2px;
  z-index: 9999;
  .line-color {
    z-index: 999999;
    background-color: black;
    color: #000;
    transform: translateX(45);
    background-color: #000;
  }
`;
