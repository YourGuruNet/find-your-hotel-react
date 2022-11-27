import React from "react";
import { Icon } from "./svg.styles";
import { motion } from "framer-motion";
const Blob = ({ width, height, rotate }) => {
  return (
    <Icon width={width} height={height}>
      <motion.div
        animate={{ rotate: rotate }}
        transition={{ ease: "linear", duration: 1 }}>
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          preserveAspectRatio="none">
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop1"
                stop-color="rgba(248, 117, 55, 1)"
                offset="0%"></stop>
              <stop
                id="stop2"
                stop-color="rgba(251, 168, 31, 1)"
                offset="100%"></stop>
            </linearGradient>
          </defs>

          <path
            fill="url(#sw-gradient)"
            d="M25.1,-31.7C30.6,-25.2,32,-15.5,33.3,-6.1C34.7,3.3,36.1,12.4,32.6,19.1C29.1,25.7,20.7,29.9,12.3,32.2C3.9,34.6,-4.5,35.1,-11.7,32.4C-18.9,29.7,-24.9,23.8,-30.1,16.5C-35.4,9.2,-40,0.7,-38.8,-6.9C-37.5,-14.6,-30.5,-21.2,-23.1,-27.4C-15.6,-33.6,-7.8,-39.2,1,-40.4C9.8,-41.5,19.5,-38.2,25.1,-31.7Z"
            transform="translate(50 50)"
            stroke-width="0"></path>
        </svg>
      </motion.div>
    </Icon>
  );
};

export default Blob;
