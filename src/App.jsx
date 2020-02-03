import React from "react";
import thunkMiddleware from "redux-thunk";
// import Development from "./components/development";
import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import combatReducer from "./reducers";
import ArenaContainer from "./containers/ArenaContainer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combatReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <ArenaContainer />
      </Provider>
    </div>
  );
};

export default App;
