import Slider from "infinite-react-carousel";
import React from "react";
import CatCard from "./CatCard";

// const Slide = ({ carts }) => {
//   return (
//     <div className="slide">
//       <div className="container">
//         <Slider slidesToShow={5} arrowsScroll={2}>
//           {carts.map((card) => {
//             return <CatCard card={card} />;
//           })}
//         </Slider>
//       </div>
//     </div>
//   );
// };

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
