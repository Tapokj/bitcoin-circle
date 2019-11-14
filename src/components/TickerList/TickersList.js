import React, { useContext } from "react";
// item component
import { TickerItem } from "./views";
// context
import { TickerContext } from "../../state-context";
// styles
import styles from "./TickersList.module.scss";

export const TickersList = () => {
  const { activeTicker, selectActive, tickersList } = useContext(TickerContext);

  const isActive = idx => idx === activeTicker.id;

  const eachRender = ({ id, ...props }, elementIdx) => (
    <TickerItem
      styleHash={styles}
      isActive={isActive(id)}
      onClick={() => selectActive(elementIdx)}
      key={id}
      {...props}
    />
  );

  return (
    <div className={styles["ticker-list"]}>{tickersList.map(eachRender)}</div>
  );
};
