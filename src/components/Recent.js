import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { recentView } from "../data";
function Recent() {
  const view = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <Box className="recent">
        <Box sx={{ padding: 2, textAlign: "center", pt: 2 }}>
          <h1> Recently viewed Items </h1>
        </Box>
        <Box>
          <Carousel
            responsive={view}
            draggable={true}
            autoPlay={true}
            showDots={false}
            infinite={true}
            removeArrowOnDeviceType={["tablet"]}
          >
            {recentView.map((item) => (
              <Link to="/category">
                <img
                  src={item.img}
                  alt="..."
                  style={{
                    width: "300px",
                    height: "150px",
                    borderRadius: "150px",
                  }}
                />
              </Link>
            ))}
          </Carousel>
        </Box>
      </Box>
    </>
  );
}

export default Recent;
