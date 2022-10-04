import React from "react";
import styled from "styled-components";
import { colorPalette } from "../app/assets/theme/colorPalette";
import { Rating } from "react-simple-star-rating";

const Review = ({ reviews }) => {
  const getPercentValue = () => {
    return (3.3 / 5) * 100;
  };

  return (
    <ReviewRow>
      <ReviewSum>5.0</ReviewSum>
      <Rating
        ratingValue={getPercentValue()}
        readonly
        fillColor={colorPalette.darkBlue}
        emptyColor={colorPalette.lightBlue}
        size={25}
      />
      <Reviews>(14 reviews)</Reviews>
    </ReviewRow>
  );
};

export default Review;

const ReviewRow = styled.section`
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ReviewSum = styled.span`
  font-size: 2rem;
  font-weight: 500;
  margin-right: 1rem;
`;

const Reviews = styled.span`
  margin-left: 1rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.secondaryText};
`;
