import React from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './../node_modules/bootstrap/dist/js/bootstrap.js';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <React.Fragment>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <Main />
          </div>
        </div>
    </React.Fragment>
  );
}
export default App;
