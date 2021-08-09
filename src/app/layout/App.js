import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getAddedPlaces } from "../../components/places/reducer/PlacesActions";
import { GoogleMapWrapper } from "../../components/GoogleMap/GoogleMapWrapper";
import { ThemeProvider } from "styled-components";
import theme from "../assets/theme/theme";
import styled from "styled-components";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <GoogleMapWrapper />
        </Layout>
      </ThemeProvider>
    );
  }
}

const Layout = styled.div`
  font-size: 4rem;
  background-color: ${(props) => props.theme.fontColor_Dark};
`;

const mapDispatchToProps = (dispatch) => {
  return {
    getAddedPlaces: () => dispatch(getAddedPlaces()),
  };
};

export default connect(null, mapDispatchToProps)(App);
