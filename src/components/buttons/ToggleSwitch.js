import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled, { css } from "styled-components";
import { colorPalette } from "../../app/assets/theme/colorPalette";
import MoonIcon from "../../app/assets/svg/MoonIcon";
import SunIcon from "../../app/assets/svg/SunIcon";

const ToggleSwitch = ({ action }) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
    action();
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 20,
  };

  return (
    <Switch isOn={isOn} onClick={() => toggleSwitch()}>
      <motion.div
        layout
        whileHover={{ scale: 1.2 }}
        className="handle"
        transition={spring}>
        {isOn ? (
          <MoonIcon height={2} width={2} />
        ) : (
          <SunIcon height={2} width={2} />
        )}
      </motion.div>
    </Switch>
  );
};

export default ToggleSwitch;

const Switch = styled.div`
  position: relative;
  width: 10rem;
  height: 5rem;
  border: 0.1rem solid ${colorPalette.lightGray};
  display: flex;
  justify-content: flex-start;
  border-radius: 5rem;
  padding: 1rem;
  cursor: pointer;
  ${(props) =>
    props.isOn &&
    css`
      justify-content: flex-end;
    `}

  .handle {
    width: 3rem;
    height: 3rem;
    border: 0.1rem solid ${colorPalette.lightGray};
    border-radius: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
