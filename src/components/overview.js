import React from "react";
import "./overview.css";

import CardSmall from "./card-small";

const dataList = [
  {
    id: 1,
    views: "Page Views",
    icon: "facebook",
    number: "87",
    isDanger: true,
    percent: 2,
  },
  {
    id: 2,
    views: "Likes",
    icon: "facebook",
    number: "52",
    isDanger: false,
    percent: 2,
  },
  {
    id: 3,
    views: "Likes",
    icon: "instagram",
    number: "5462",
    isDanger: false,
    percent: 2257,
  },
  {
    id: 4,
    views: "Profile Views",
    icon: "instagram",
    number: "52k",
    isDanger: false,
    percent: 1375,
  },
  {
    id: 5,
    views: "Retwwets",
    icon: "twitter",
    number: "117",
    isDanger: false,
    percent: 303,
  },
  {
    id: 6,
    views: "Likes",
    icon: "twitter",
    number: "207",
    isDanger: false,
    percent: 553,
  },
  {
    id: 7,
    views: "Page Views",
    icon: "youtube",
    number: "107",
    isDanger: true,
    percent: 19,
  },
  {
    id: 8,
    views: "Total Views",
    icon: "youtube",
    number: "1407",
    isDanger: true,
    percent: 12,
  },
];

export default function Overview() {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {dataList.map((item) => {
            return (
              <CardSmall
                key={item.id}
                views={item.views}
                icon={item.icon}
                number={item.number}
                isDanger={item.isDanger}
                percent={item.percent}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
