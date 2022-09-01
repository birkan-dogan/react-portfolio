import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { MdEngineering } from "react-icons/md";
import { FaGit, FaReact } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import img1 from "../assets/images/41308287040223.jpg";
import img2 from "../assets/images/22310236695384.jpg";
import img3 from "../assets/images/image (1).jpg";
import img4 from "../assets/images/image (2).jpg";
import img5 from "../assets/images/front-end.jpg";
import img6 from "../assets/images/react.jpg";
import "../styles/Develop.css";

const Develop = () => {
  return (
    <div className="certificate">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Front-end Development"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<MdOutlineWeb />}
        >
          <img src={img5} alt="" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="React"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaReact />}
        >
          <img src={img6} alt="" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="JavaScript"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<IoLogoJavascript />}
        >
          <img src={img2} alt="" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="HTML & CSS"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<AiFillHtml5 />}
        >
          <img src={img1} alt="" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Git & GitHub"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaGit />}
        >
          <img src={img3} alt="" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Feature Engineering"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<MdEngineering />}
        >
          <img src={img4} alt="" />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Develop;
