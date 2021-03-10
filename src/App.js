import React from 'react';
import './App.css';
import axios from 'axios';

// const addNewItem = (newItem) => {
//   axios.post('https://localhost:5001/api/TodoItems', newItem);
// };

// const App = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     axios.get('https://localhost:5001/api/TodoItems').then((response) => {
//       console.log(response);
//       setItems(response.data);
//     });
//   });

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
    axios.post('https://localhost:5001/api/TodoItems/', newItem);
    this.setState({
      items: [...this.state.items, newItem],
    });
    event.preventDefault();
  }

  //Get all items from database when app starts
  componentDidMount() {
    axios.get('https://localhost:5001/api/TodoItems').then((response) => {
      this.setState({
        items: response.data,
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
              return <p key={id}>{value.name}</p>;
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
