import React from 'react';
import './App.css';
import axios from 'axios';

const apiName = 'https://localhost:5001/api/TodoItems';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        name: 'Coffee',
        isComplete: false,
        details: 'This is description',
      },
      items: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handle all input changes and pass to states
  handleChange(event) {
    this.setState({
      value: {
        name: event.target.value,
        isComplete: false,
        details: 'This is description',
      },
    });
  }
  //When press submit button send new item to database
  handleSubmit(event) {
    let newItem = this.state.value;
    axios.post(apiName, newItem);
    this.setState({
      items: [...this.state.items, newItem],
    });
    event.preventDefault();
  }

  //Get all items from database when app starts
  componentDidMount() {
    axios.get(apiName).then((response) => {
      this.setState({
        items: response.data,
      });
    });
  }

  deleteItem(id) {
    axios.delete(`${apiName}/${id}`).then(() => {
      this.setState({
        items: [...this.state.items.filter((item) => item.id !== id)],
      });
    });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <form className='form' onSubmit={this.handleSubmit}>
            <label>
              <textarea
                value={this.state.value.name}
                onChange={this.handleChange}
              />
            </label>
            <input type='submit' value='Submit' />
          </form>
          <ul>
            {this.state.items.map((value, id) => {
              return (
                <div>
                  <p key={id}>{value.name}</p>{' '}
                  <button onClick={() => this.deleteItem(value.id)}>
                    delete
                  </button>
                </div>
              );
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
