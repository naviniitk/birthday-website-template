import * as React from "react";
import BallComponent from "../ball-component/ball-component";

const BackgroundComponent: React.FC = () => {
  const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
  const sizes = [
    "1vw",
    "5vw",
    "10vw",
    "15vw",
    "20vw",
    "30vw",
    "31vw",
    "32vw",
    "33vw",
    "34vw",
    "35vw",
    "36vw",
    "37vw",
    "38vw",
    "39vw",
    "40vw",
    "50vw",
    "70vw",
  ];
  const numBalls = 50;
  const balls = [];
  let prevTop = 0;

  for (let i = 0; i < numBalls; i++) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const width = sizes[Math.floor(Math.random() * sizes.length)];
    const left = `${Math.floor(Math.random() * 90) - 30}vw`;
    const top = `${prevTop}vh`;
    prevTop = Number(width.slice(0, -2)) + Number(top.slice(0, -2));
    const speed = Math.floor(Math.random() * 8) + 1;
    const ballProps = { color, left, top, width, speed };
    balls.push(ballProps);
  }
  return (
    <div className="background" data-scroll>
      {balls.map((ball, index) => {
        return <BallComponent data-scroll key={index} {...ball} />;
      })}
    </div>
  );
};

export default BackgroundComponent;
