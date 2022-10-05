import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { connect } from "react-redux";
import { colorPalette } from "../app/assets/theme/colorPalette";
import { THEMES } from "../app/constants/constants";

const SkeletonLayout = ({ children, layoutTheme }) => {
  return (
    <SkeletonTheme
      baseColor={
        layoutTheme === THEMES.DARK
          ? colorPalette.black
          : colorPalette.lightGray
      }
      highlightColor={
        layoutTheme === THEMES.DARK
          ? colorPalette.darkGray_3
          : colorPalette.white
      }>
      {children}
    </SkeletonTheme>
  );
};

const mapStateToProps = (state) => ({
  layoutTheme: state.user.preferences.layoutTheme,
});

export default connect(mapStateToProps, null)(SkeletonLayout);
