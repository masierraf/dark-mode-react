import React from "react";
import classnames from "classnames";

export default function Card({ username, data, dataTitle, today, social }) {
  return (
    <article className={classnames("card", social)}>
      <p className="card-tittle">
        <img
          src={`images/icon-${social}.svg`}
          alt=""
          className="card-tittle-img"
        />
        {username}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{data}</span>
        <span className="card-followers-tittle">{dataTitle}</span>
      </p>
      <p className="card-today">
        <img src="images/icon-up.svg" alt="" />
        {today} Today
      </p>
    </article>
  );
}
