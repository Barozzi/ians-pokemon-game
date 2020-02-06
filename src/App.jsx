import React from "react";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import combatReducer from "./reducers";
import ArenaContainer from "./containers/ArenaContainer";
import Header from "./components/Header";
import "./App.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combatReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

const App = () => (
  <div className="App">
    <Header />
    <Provider store={store}>
      <ArenaContainer />
    </Provider>
  </div>
);

export default App;
