import React, { Component } from 'react';
import Contact from './components/Contact';
import { connect } from 'react-redux';

import { click, getContacts } from "./actions/clickAction";

class App extends Component {

  state = {
    persons: [
      {
        id: 1,
        name: "Lukasz",
        surname: "Kowalski",
        age: '39',
      },
      {
        id: 2,
        name: "Tomasz",
        surname: "Nowak",
        age: '24',
      },
      {
        id: 3,
        name: "Grzegorz",
        surname: "K.",
        age: '33',
      }
    ],
    query: '',
  }

  componentDidMount() {
    this.props.onGetContacts(this.state.persons);
  }

  handleSearch = (event) => {
    const results = this.state.persons.filter(
      function(person) {
          return (person.name+person.surname).toLowerCase().includes(event.target.value.toLowerCase())
      }
    )

    this.setState({
      query: event.target.value,
      filteredPeople: results
    });
  }

  handleSort = (event) => {
    
    this.setState({
    persons: this.state.persons.sort()
    });

    event.preventDefault();
    this.props.onClick();

  }

  render() {
    const style = {
      backgroundColor: '#987976',
      outline: 'none',
      borderColor: '#644364',
      borderRadius: '5px',
      padding: '3px 20px',
      margin: '0 20px',
      fontSize: '20px'
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kontakty</h1>
        </header>
        <div className="App-intro">
        { (this.state.filteredPeople || this.state.persons).map(person =>
            <Contact  
            key = {person.id}
            person ={ person }
            />
          ) }
        </div>
        <div className="App-form">
          <form onSubmit={this.handleSort}>
            <input
              placeholder="Search by name or surname..."
              onChange={this.handleSearch}
            />
             <button style={style} onClick={this.handleSort}>
              Sort!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({})

export default connect(
  mapStateToProps,
  { onClick: click,
    onGetContacts: getContacts,
   }
)(App)
