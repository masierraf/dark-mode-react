import React from "react";
import "./top-card-list.css";
import "./card.css";
import Card from "./card";

const dataList = [
  {
    id: 1,
    username: "@masierraf",
    data: 1897,
    dataTitle: "Likes",
    today: 88,
    social: "facebook",
  },
  {
    id: 2,
    username: "@masierraf",
    data: 1300,
    dataTitle: "Followers",
    today: 55,
    social: "twitter",
  },
  {
    id: 3,
    username: "@masierraf",
    data: 1500,
    dataTitle: "Followers",
    today: 34,
    social: "instagram",
  },
  {
    id: 4,
    username: "@masierraf",
    data: 18970,
    dataTitle: "Views",
    today: 120,
    social: "youtube",
  },
];

export default function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {dataList.map((item) => {
            return (
              <Card
                key={item.id}
                username={item.username}
                data={item.data}
                dataTitle={item.dataTitle}
                today={item.today}
                social={item.social}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
