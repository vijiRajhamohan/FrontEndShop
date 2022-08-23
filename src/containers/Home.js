import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CategoryItem from "../components/CategoryItem";
import Recent from "../components/Recent";
import Deals from "../components/Deals";
import SideNav from "../components/sidenav";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="row">
        <div className="col-sm-2 col-md-2 pt-2 border-right">
          <SideNav />{" "}
        </div>
        <div className="col-sm-10 col-md-10 pt-2 ">
          <div className="row">
            <CategoryItem />
          </div>
          <div className="row">
            <Deals />
          </div>
          <div className="row pb-5">
            <Recent />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Home;
