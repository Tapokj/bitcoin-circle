import React from "react";
// styles
import cn from "classnames";

export const TickerItem = ({ value, title, isActive, onClick, styleHash }) => (
  <div onClick={onClick} className={cn(styleHash['ticker-element'], {[styleHash["active"]]: isActive })}>
    <h4>{title}</h4>
    <span>{`${value}%`}</span>
  </div>
);
