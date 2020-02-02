import React from 'react';
import Development from './components/development';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Development />
      </Provider>
    </div>
  );
};

export default App;
