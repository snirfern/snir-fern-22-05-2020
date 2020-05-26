import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import { ThemeContextProvider } from "./components/Theme/Theme";

const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </Provider>,
  document.getElementById("root")
);
