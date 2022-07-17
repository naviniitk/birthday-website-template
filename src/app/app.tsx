import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { BackgroundComponent, DashboardComponent } from "@components";

const App: React.FC = (): JSX.Element => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
  });
  return (
    <div className="app" data-scroll-container data-scroll>
      <BackgroundComponent />
      <DashboardComponent />
    </div>
  );
};

export default App;
