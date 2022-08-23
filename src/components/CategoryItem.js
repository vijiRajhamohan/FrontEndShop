import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { Box } from "@mui/material";

import { categories } from "../data";
const CategoryItem = () => {
  const res = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
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
      <Box sx={{padding: 2, textAlign: "center" }}>
        <Carousel
          responsive={res}
          draggable={true}
          autoPlay={true}
          showDots={false}
          infinite={true}
          removeArrowOnDeviceType={["tablet"]}
        >
          {categories.map((item) => (
            <div>
              <Link to={`/productsList/${item.cat}`}>
                <img
                  src={item.img}
                  className="card-img-top "
                  alt="..."
                  style={{
                    width: "300px",
                    height: "150px",
                    borderRadius: "150px",
                    
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
export default CategoryItem;
