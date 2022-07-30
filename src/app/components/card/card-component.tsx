import * as React from "react";
import "./card.css";

interface CardProps {
  children: JSX.Element;
  reverse: boolean;
  header: string;
  text: string;
}

const CardComponent: React.FC<CardProps> = (props) => {
  return (
    <div
      data-scroll
      className="card"
      style={{ flexDirection: props.reverse ? "row" : "row-reverse" }}
    >
      <div className="image-info-text">
        <div
          data-scroll-class="info-scroll"
          data-scroll
          data-scroll-repeat="true"
          className="info-text"
        >
          {props.text}
        </div>
      </div>
      <div className="images">{props.children}</div>
    </div>
  );
};

export default CardComponent;
