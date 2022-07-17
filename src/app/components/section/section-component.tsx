import * as React from "react";
import "./section.css";

interface SectionProps {
  children: React.ReactNode;
}

const SectionComponent: React.FC<SectionProps> = (props) => {
  return (
    <div data-scroll className="section-class">
      {props.children}
    </div>
  );
};

export default SectionComponent;
