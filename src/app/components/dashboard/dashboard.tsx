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
        <span className="greeting birthday">Happy Birthday</span>
        <Typical
          steps={["Rajani (Asha ki Nirasha)", 4000]}
          loop={Infinity}
          className="greeting birthday"
        />
      </SectionComponent>
      <SectionComponent>
        <CardComponent
          header=""
          text="Haaye ye smile, kahan leke jayegi Rajjo"
          reverse={false}
        >
          <img className="img" src={Img5} alt="" />
        </CardComponent>
        <CardComponent
          header=""
          text="Dekh raha h Vinod... Haan bas dekh hi raha h"
          reverse={true}
        >
          <img className="img" src={Img17} alt="" />
        </CardComponent>
      </SectionComponent>
      <SectionComponent>
        <div className="greeting">Neeche bhi scroll kar bsdk</div>
      </SectionComponent>
      <SectionComponent>
        <CardComponent
          header=""
          text="Are kha gyi vo mallu porn ki link.... Yhi to likh kr rkhi thi"
          reverse={false}
        >
          <img className="img" src={Img18} alt="" />
        </CardComponent>
        <CardComponent
          header=""
          text="Isro ka rocket hawa me udne se phle k kch andekhe pal"
          reverse={true}
        >
          <img className="img" src={Img19} alt="" />
        </CardComponent>
      </SectionComponent>
      <SectionComponent>
        <div className="greeting">Thoda aur neeche jao Darling</div>
      </SectionComponent>
      <SectionComponent>
      <CardComponent
          header=""
          text="Maaf kijiyega saale sahab :- Rajani KaMeena"
          reverse={false}
        >
          <img className="img" src={Img20} alt="" />
        </CardComponent>
        <CardComponent
          header=""
          text="Aaj to aam ko choos choos ke kahunga"
          reverse={true}
        >
          <img className="img" src={Img8} alt="" />
        </CardComponent>
      </SectionComponent>
      <SectionComponent>
        <div className="greeting">
          Itna kaafi hona chahiye yaar bahut kar liya
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
        <div className="greeting">Bas itna hi thha, maje karo</div>
      </SectionComponent>
      <SectionComponent>
        <CardComponent
          header=""
          text="My one and Only ❤️"
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
      <SectionComponent>
        <div className="greeting">
          <span>
            <a
              href="https://gogoanime.lu/category/kimi-no-na-wa"
              target="_blank"
              rel="noreferrer"
            >
              Your Name
            </a>
          </span>{" "}
          dekh lena, bahut baar bol chuka
        </div>
      </SectionComponent>
    </div>
  );
};

export default DashboardComponent;
