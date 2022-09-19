import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Display from './components/Display';
import {store} from './redux/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />

        <Display/>
        
        {/* footer */}

      </div>
    </Provider>
  );
}

export default App;
