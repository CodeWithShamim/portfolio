import React from "react";
import { FaCamera } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionWrapper from "../../hoc/SectionWrapper";
import wd from "../../images/web.png";
import rd from "../../images/backend.png";
import rn from "../../images/mobile.png";
import fs from "../../images/creator.png";

const experiences = [
  {
    title: "Front End Developer",
    company_name: "Starbucks",
    icon: wd,
    iconBg: "#383E56",
    date: "September 2021 - April 2022",
    points: [
      "Developing and maintaining web applications using HTML, CSS, JavaScript and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Tesla",
    icon: rd,
    iconBg: "#e871e8",
    date: "April 2022 - September 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Shopify",
    icon: rn,
    iconBg: "#383E56",
    date: "October 2022 - Present",
    points: [
      "Developing and maintaining android & ios applications using React Native and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: fs,
    iconBg: "#e871e8",
    date: "September 2022 - Present",
    points: [
      "Developing and maintaining web and android, ios applications using React Native, React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  const { title, date, icon, iconBg, points } = experience;

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#334155", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #fff" }}
      date={date}
      iconStyle={{ background: iconBg, color: "#fff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={icon}
            alt={title}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <ul className="mt-5 list-disc ml-5 space-y-2 text-start">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div>
      <VerticalTimeline>
        {experiences.map((experience) => {
          return <ExperienceCard experience={experience} />;
        })}
      </VerticalTimeline>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
