import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { Box } from "@mui/material";

import { deals } from "../data";
const Deals = () => {
  const res = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Box className="products ps-5">
      <Box sx={{textAlign:"center",pt: 2}}><h1 >Deals & Offers</h1></Box>
      <Box sx={{ paddingTop: 5, textAlign: "center" }}>
        <Carousel
          responsive={res}
          draggable={true}
          autoPlay={true}
          showDots={false}
          infinite={true}
          removeArrowOnDeviceType={["tablet"]}
        >
          
          {deals.map((item) => (
            <div>
              <Link to={`/productsList/${item.cat}`}>
                <img
                  src={item.image}
                  className="card-img-top "
                  alt="..."
                  style={{
                    width: "500px",
                    height: "300px",
                   
                  }}
                />
              </Link>
            </div>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};
export default Deals;






