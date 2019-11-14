import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { TickersList, CirclePecentage } from "./components";
import { TickerProvider } from "./state-context";

const BasicApp = (
  <TickerProvider>
    <App>
      <CirclePecentage/>
      <TickersList />
    </App>
  </TickerProvider>
);

ReactDOM.render(BasicApp, document.getElementById("root"));
