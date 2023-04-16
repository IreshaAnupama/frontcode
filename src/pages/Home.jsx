import TopNav from "../components/TopNav";
import Footer from "../components/Footer";

import image1 from "../img/image1.jpg";
import "./Pages.css";

import React, { Fragment } from "react";
import PickUpFormComponent from "../components/customer/PickUpFormComponent";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div>
        <TopNav className="top-bar fixed"></TopNav>
      </div>

      <div>
        <img className="homeimg" src={image1} alt="First slide" />
      </div>

      <div>
        <Fragment>
          <section className="home">
            <div className="text">
              <h1>
                Hello,<br></br> Welcome to beeline courier service
              </h1>
            </div>
          </section>
        </Fragment>
      </div>
      <div className="marginfix" style={{ color: "purple" }}>
        <p>
          we use Smart route technology for our courier team. we will protect
          your parcel until you receive your parcel
        </p>
      </div>
      <Container>
        <PickUpFormComponent />
      </Container>

      <div className="marginfix2">
        <Footer className="fixed-bottom"></Footer>
      </div>
    </>
  );
};

export default Home;
