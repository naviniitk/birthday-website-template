import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import { DashboardComponent } from "./components";

const App: React.FC = (): JSX.Element => {

  React.useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });
  });
  return (
    <div className="app" data-scroll-container>
      <DashboardComponent />
      <DashboardComponent />
      <DashboardComponent />
    </div>
  );
};

export default App;
