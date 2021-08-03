import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getAddedPlaces } from '../../components/places/reducer/PlacesActions';
import { GoogleMapWrapper } from '../../components/GoogleMap/GoogleMapWrapper';



class App extends React.Component {
 
  render() {
    return (
      <div className='App'>
        <GoogleMapWrapper/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAddedPlaces: () => dispatch(getAddedPlaces()),
  };
};

export default connect(null,mapDispatchToProps)(App);
