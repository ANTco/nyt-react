// import React, { Component } from 'react';
// import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">YOU SUCK</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/Main.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import ReactDom from 'react-dom'

import Main from './components/main'

ReactDom.render (
  <Main />,
  document.getElementById('src')
)