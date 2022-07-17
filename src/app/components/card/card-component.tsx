import * as React from "react";
import "./card.css";

interface CardProps {
  children: JSX.Element;
  header: string;
  text: string;
}

const CardComponent: React.FC<CardProps> = (props) => {
  return (
    <div data-scroll className="card">
      <div className="image-info-text">
        <h1 data-scroll>{props.header}</h1>
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
