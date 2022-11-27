import React from "react";
import { useState } from "react";
import Blob from "../../app/assets/svg/Blob";
import { BlobWrapper, CarouselSliderWrapper } from "./CarouselSlider.styles";

const CarouselSlider = () => {
  const [rotate, setRotate] = useState(0);
  return (
    <CarouselSliderWrapper>
      <BlobWrapper onClick={() => setRotate(rotate + 90)}>
        <Blob width={100} height={100} rotate={rotate} />
      </BlobWrapper>
    </CarouselSliderWrapper>
  );
};

export default CarouselSlider;
