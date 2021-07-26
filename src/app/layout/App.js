import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getAddedPlaces } from '../../components/places/reducer/PlacesActions';



class App extends React.Component {
 
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
         <button onClick={()=> this.props.getAddedPlaces()}>get places</button>
        </header>
      </div>
    );
  }
}

// const mapStateToProps = ({ activitiesState: { appLoaded } }) => {
//   return { appLoaded };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    getAddedPlaces: () => dispatch(getAddedPlaces()),
  };
};

export default connect(null,mapDispatchToProps)(App);
