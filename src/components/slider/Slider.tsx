import Slick, { Settings } from "react-slick";

import "./slider.css";

export const Slider = (props: Settings) => {
  const settings = {
    infinite: true,
    speed: 1500,
  };

  return (
    <Slick {...props} {...settings} autoplaySpeed={5000}>
      {props.children}
    </Slick>
  );
};
