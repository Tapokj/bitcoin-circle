import React, { Component } from "react";
// context
import { TickerContext } from "./TickerContext";

class TickerProvider extends Component {
  // state
  state = {
    tickersList: [
      {
        id: "litecoin",
        title: "Litecoin",
        value: 20,
        color: "#232121"
      },
      {
        id: "bitcoin",
        title: "Bitcoin",
        value: 40,
        color: "#1E1F22"
      },
      {
        id: "ethereum",
        title: "Ethereum",
        value: 10,
        color: "#423b3c"
      },
      {
        id: "eos",
        title: "EOS",
        value: 10,
        color: "#464242"
      },
      {
        id: "ripple",
        title: "Ripple",
        value: 10,
        color: "#4f4d4d"
      },
      {
        id: "bitcoin_cash",
        title: "Bitcoin Cash",
        value: 10,
        color: "#7a7a7a"
      }
    ],
    activeTicker: {}
  };

  handleTickerSelection = idx => {
    const activeTicker = { ...this.state.tickersList[idx] };
    this.setState({ activeTicker });
  };

  render() {
    const { children } = this.props;
    const { tickersList, activeTicker } = this.state;

    return (
      <TickerContext.Provider
        value={{
          tickersList,
          activeTicker,
          selectActive: this.handleTickerSelection
        }}
      >
        {children}
      </TickerContext.Provider>
    );
  }
}

export { TickerProvider };
