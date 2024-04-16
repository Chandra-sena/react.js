import React, { Component } from 'react';
import TableView from './TableView'; // assuming the TableView component is in a separate file

class App extends Component {
  render() {
    const data = [
      { name: 'chandrasena', age: 20, email: '21bq1a4237@vvit.net' },
      { name: 'saketh', age: 20, email: '21bq1a4230@vvit.net' },
      { name: 'Pranav', age: 20, email: '21bq1a4232@vvit.net' }
    ];

    return (
      <div>
        <h1>Table View Example</h1>
        <TableView data={data} />
      </div>
    );
  }
}

export default App;