import React, { useContext } from "react";
// chart
import { TickerContext } from "../../state-context";
import PieChart from "react-minimal-pie-chart";
import styles from "./CicrlePercnantage.module.scss";

export const CirclePecentage = () => {
  const { tickersList, selectActive, activeTicker } = useContext(TickerContext);
  const updateData = (e, data, dataIndex) => selectActive(dataIndex);

  const isActive = idx => activeTicker.id === idx;

  const chooseActiveColor = () => {
    return tickersList.map(element => ({
      ...element,
      color: isActive(element.id) ? "#17d562" : element.color
    }));
  };

  return (
    <div className={styles['chart__elements']}>
      <div className={styles["chart-section"]}>
        <PieChart
          animate
          animationDuration={500}
          animationEasing="ease-out"
          cx={50}
          cy={50}
          data={chooseActiveColor()}
          label={false}
          labelPosition={50}
          lengthAngle={360}
          lineWidth={16}
          onClick={updateData}
          onMouseOut={undefined}
          onMouseOver={undefined}
          paddingAngle={5}
          radius={50}
          ratio={1}
          rounded={false}
          startAngle={-60}
        />
      </div>
      <span className={styles['flagged-trades']}>Total Flagged <br/> Trades</span>
    </div>
  );
};
