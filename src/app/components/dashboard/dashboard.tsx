import React, { useEffect, useState } from "react";
import Typical from "react-typical";
import { CardComponent, SectionComponent } from "@components";
import Img1 from "@images/img1.jpg";
import "./dashboard.css";

const DashboardComponent: React.FC = () => {
  return (
    <div data-scroll className="dashboard">
      <SectionComponent>
        <span className="greeting birthday">Happy Birthday</span>
        <Typical
          steps={["Rajani", 4000, "Jaspreet", 4000]}
          loop={Infinity}
          className="greeting birthday"
        />
      </SectionComponent>
      <SectionComponent>
        <CardComponent
          header="This is the Header"
          text="This is the content I am trying to add in this"
        >
          <img className="img" src={Img1} alt="" />
        </CardComponent>
      </SectionComponent>
      <SectionComponent>
        <div className="greeting">Wait There's More</div>
      </SectionComponent>
      <SectionComponent>
        <CardComponent
          header="This is the Header"
          text="This is the content I am trying to add in this"
        >
          <img className="img" src={Img1} alt="" />
        </CardComponent>
      </SectionComponent>
      <SectionComponent>
        <div className="greeting">Here Too Bro :)</div>
      </SectionComponent>
      <SectionComponent>
        <CardComponent
          header="This is the Header"
          text="This is the content I am trying to add in this"
        >
          <img className="img" src={Img1} alt="" />
        </CardComponent>
      </SectionComponent>
      <SectionComponent>
        <div className="greeting">Don't Go Yet</div>
      </SectionComponent>
      <SectionComponent>
        <CardComponent
          header="This is the Header"
          text="This is the content I am trying to add in this"
        >
          <img className="img" src={Img1} alt="" />
        </CardComponent>
      </SectionComponent>
      <SectionComponent>
        <div className="greeting">And That's a wrap!! Good day</div>
      </SectionComponent>
      <SectionComponent>
        <CardComponent
          header="This is the Header"
          text="This is the content I am trying to add in this"
        >
          <img className="img" src={Img1} alt="" />
        </CardComponent>
      </SectionComponent>
    </div>
  );
};

export default DashboardComponent;
