import React, { Component } from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import axios from 'axios';
//import './App.css';

class App extends Component {

  state = {
    values: []

  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/values').then(response => {
      this.setState({
        values: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <Header as='h2' icon>
            <Icon name='users' />
             Values List
              <Header.Subheader>
              List of values.. dahh
              </Header.Subheader>
          </Header>

        </div>
        <List bulleted>
          {this.state.values.map(
            (value: any) => {
              return <List.Item key={value.id}>{value.name}</List.Item>
            }
          )}
        </List>
        {/* {Object(this.state.values[0])["name"]} */}
      </div>
    );
  }

}

export default App;
