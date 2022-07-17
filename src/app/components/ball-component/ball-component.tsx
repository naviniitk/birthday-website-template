import * as React from "react";
import "./ball.css";

interface BallProps {
  color: string;
  width: string;
  left: string;
  top: string;
  speed: number;
}

const BallComponent: React.FC<BallProps> = (props) => {
  const styles = {
    backgroundColor: props.color,
    width: props.width,
    height: props.width,
    left: props.left,
    top: props.top,
  };
  return (
    <div
      className="ball"
      data-scroll
      data-scroll-speed={props.speed}
      style={styles}
    ></div>
  );
};

export default BallComponent;
