import React, { Component } from 'react';
import './App.css';
import User from './User/User';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <table> */}
        <tr>
          <th>id</th>
          <th>Nume</th>
          <th>Salariu</th>
          <th>CAS</th>
          <th>CAM</th>
          <th>Scutirea <br /> personala</th>
          <th>Scutirea <br />personala majorata</th>
          <th>Scutirea acordata<br /> sotiei (sotului)</th>
          <th>Scutirea acordata <br />sotiei (sotului) majorata</th>
          <th>Copiii</th>
          <th>Total scutiri</th>
          <th>Total salariu</th>
        </tr>
        <User id="1" name="Иван Иванов" salary="5000" scutire_personala="yes" scutire_personala_majorata="no" scutire_sotiei="yes" scutire_sotiei_majorata="no" copiii="2" />
        {/* <User id="2" name="Иван Иванов" salary="10000" scutire_personala="no" scutire_personala_majorata="no" scutire_sotiei="no" scutire_sotiei_majorata="no" copiii="0" /> */}
        {/* </table> */}
      </div>
    );
  }
}

export default App;
