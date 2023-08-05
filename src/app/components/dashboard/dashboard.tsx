import React from "react";
import Typical from "react-typical";
import { CardComponent, SectionComponent } from "@components";
import Img2 from "@images/img2.jpg";
import Img5 from "@images/img5.jpg";
import Img6 from "@images/img6.jpg";
import Img8 from "@images/img8.jpg";
import Img10 from "@images/img10.jpg";
import Img11 from "@images/img11.jpg";
import Img17 from "@images/img17.jpg";
import Img18 from "@images/img18.jpg";
import Img19 from "@images/img19.jpg";
import Img20 from "@images/img20.jpg";
import "./dashboard.css";

const DashboardComponent: React.FC = () => {
  return (
    <div data-scroll className="dashboard">
      <SectionComponent>
        <span className="greeting birthday"></span>
        <Typical
          steps={["Happy Birthday Rajani", 4000]}
          loop={Infinity}
          className="greeting birthday"
        />
      </SectionComponent>
      <SectionComponent>
        <CardComponent
          header=""
          text="Woaah, that's some smile"
          reverse={false}
        >
          <img className="img" src={Img5} alt="" />
        </CardComponent>
        <CardComponent
          header=""
          text="This is a random picture I found from gallery"
          reverse={true}
        >
          <img className="img" src={Img17} alt="" />
        </CardComponent>
      </SectionComponent>
      <SectionComponent>
        <div className="greeting">Scroll down, there's a lot more</div>
      </SectionComponent>
      <SectionComponent>
        <CardComponent
          header=""
          text="Studying so hard that you forget even clothes"
          reverse={false}
        >
          <img className="img" src={Img18} alt="" />
        </CardComponent>
        <CardComponent
          header=""
          text="Some unseen moments before the isro rocket flight"
          reverse={true}
        >
          <img className="img" src={Img19} alt="" />
        </CardComponent>
      </SectionComponent>
      <SectionComponent>
        <div className="greeting">There are few more steps</div>
      </SectionComponent>
      <SectionComponent>
      {/* <CardComponent
          header=""
          text="Maaf kijiyega saale sahab :- Rajani KaMeena"
          reverse={false}
        >
          <img className="img" src={Img20} alt="" />
        </CardComponent> */}
        <CardComponent
          header=""
          text="Yes this guy is the mango thief"
          reverse={true}
        >
          <img className="img" src={Img8} alt="" />
        </CardComponent>
      </SectionComponent>
      <SectionComponent>
        <div className="greeting">
          I guess this should be enough, maybe a bit more
        </div>
      </SectionComponent>
      <SectionComponent>
        <CardComponent
          header=""
          text="Keep calm and get through this phase"
          reverse={false}
        >
          <img className="img" src={Img10} alt="" />
        </CardComponent>
        <CardComponent
          header=""
          text="Just know that I have always got your back :)"
          reverse={true}
        >
          <img className="img" src={Img11} alt="" />
        </CardComponent>
      </SectionComponent>
      <SectionComponent>
        <div className="greeting">Well that should be the end then</div>
      </SectionComponent>
      <SectionComponent>
        <CardComponent
          header=""
          text="A truly awsome friend ❤️"
          reverse={false}
        >
          <img className="img" src={Img6} alt="" />
        </CardComponent>
        <CardComponent
          header=""
          text="Here's to many more years, Happy Birthday"
          reverse={true}
        >
          <img className="img" src={Img2} alt="" />
        </CardComponent>
      </SectionComponent>
    </div>
  );
};

export default DashboardComponent;
