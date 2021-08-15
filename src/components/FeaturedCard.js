import React from "react";
import styled from "styled-components";

import { MdRestaurantMenu } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
const FeaturedCard = () => {
  return (
    <FeaturedCardWrapper>
      <img
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1460&q=80"
        alt="Pancake"
      />
      <div className="card_text">
        <h1 className="card_title">Caramel Cake Pancakes</h1>
        <div className="card_stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="card_address">
          <p className="card_address_title">Address:</p>{" "}
          <p className="card_address_value">Riga, Ezra iela 2a</p>
        </div>
        <button className="card_button">
          view menu
          <span className="card_button_icon">
            <MdRestaurantMenu />
          </span>
        </button>
      </div>
    </FeaturedCardWrapper>
  );
};

export default FeaturedCard;

const FeaturedCardWrapper = styled.div`
  max-width: ${(props) => props.theme.remMixin(520)};
  max-height: ${(props) => props.theme.remMixin(200)};
  background-color: #fff;
  position: relative;
  display: grid;
  grid-template-columns: 220px 300px;
  border-radius: 5px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.356);
  img {
    width: ${(props) => props.theme.remMixin(220)};
    height: ${(props) => props.theme.remMixin(200)};
    border-radius: 5px 0 0 5px;
  }
  .card_button {
    position: absolute;
    bottom: ${(props) => props.theme.remMixin(-20)};
    right: ${(props) => props.theme.remMixin(-20)};
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    background-color: #fc9400;
    color: black;
    padding: 1rem 2rem;
    font-size: ${(props) => props.theme.remMixin(15)};
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294);
  }
  .card_button_icon {
    padding-left: ${(props) => props.theme.remMixin(10)};
    font-size: ${(props) => props.theme.remMixin(20)};
  }

  .card_text {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin: ${(props) => props.theme.remMixin(30)};
    line-height: ${(props) => props.theme.remMixin(30)};
  }
  .card_title {
    font-size: ${(props) => props.theme.remMixin(25)};
    padding: 0;
    color: black;
    font-weight: 400;
  }
  .card_stars {
    color: #fc9400;
    font-size: ${(props) => props.theme.remMixin(25)};
    margin: 0;
    line-height: normal;
  }
  .card_address {
    display: flex;
  }
  .card_address_title {
    padding-right: ${(props) => props.theme.remMixin(5)};
    font-weight: bolder;
  }
`;
