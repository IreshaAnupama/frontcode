import React from "react";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import "./Pages.css";

import ListUserComponent from "../components/ListUserComponent";

const About = () => {
  return (
    <>
      <div>
        <TopNav></TopNav>
      </div>
      <div>
        <h1> this web application create for the cs304 project</h1>
        <br></br>
        <h3>Aims</h3>
        <br></br>
        <li>
          The courier can find the optimal route and set his schedule
          automatically, which helps him save time.
        </li>
        <br></br>
        <li>
          {" "}
          Reduce fuel consumption, time wasted and communication cost through an
          optimal route and clear information.
        </li>
        <br></br>
        <li>
          {" "}
          Recipient can communicate a convenient data and time for his/her
          delivery.{" "}
        </li>
        <br></br>
        <li>
          {" "}
          Recipient can get an idea about the time of receiving his/her packages
        </li>
        <br></br>
        <br></br>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default About;
