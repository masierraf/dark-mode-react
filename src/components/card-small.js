import React from "react";
import "./card-small.css";

export default function CardSmall({ views, icon, number, percent, isDanger }) {
  return (
    <div className="card-small">
      <p className="card-small-views">{views}</p>
      <p className="card-small-icon">
        <img src={`images/icon-${icon}.svg`} alt="" />
      </p>
      <p className="card-small-number">{number}</p>
      {isDanger ? (
        <p className="card-small-percent is-danger">
          <span>
            <img src="images/icon-down.svg" alt="" />
            {percent} %
          </span>
        </p>
      ) : (
        <p className="card-small-percent">
          <span>
            <img src="images/icon-up.svg" alt="" />
            {percent} %
          </span>
        </p>
      )}
    </div>
  );
}
