import React from "react";
import "./Experience.css";

const workData = [
  {
    company_name: "IBM ISDL",
    joining_date: "October 2024",
    last_working_date: "Present",
    role: "Storage Developer",
    description:
      "Working as Frontend Developer in the Flash Storage Team at IBM ISDL.",
    skills: [
      "Azure Blob Storage",
      "Java",
      "MongoDB",
      "Spring Boot",
      "React",
      "DevOps",
      "Image Processing",
    ],
  },
  {
    company_name: "HSBC",
    joining_date: "August 2022",
    last_working_date: "July 2024",
    role: "Software Engineer",
    description:
      "In my role at HSBC, I developed and deployed features using Java 8, Spring Boot, and Authorization plugins in Lua for Kong API Gateway. I streamlined deployment processes by developing Jenkins pipelines and service availability checks, which reduced manual efforts by 80%. I managed application servers on AWS EC2 and EKS, provided critical production support, resolving numerous incidents, and led upgrade activity for more than 100 application servers serving multiple global markets with millions of customers with zero downtime.",
    skills: [
      "Java",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "SQL",
      "Agile Methodologies",
    ],
  },
];

function Experience() {
  return (
    <div className="experience-container">
      <h1 className="experience-heading">Work Experience</h1>
      {workData.map((job, index) => (
        <div key={index} className="work-experience">
          <h2 className="company-name">{job.company_name}</h2>
          <div className="role-duration">
            <h4>{job.role}</h4>
            <p>
              {job.joining_date} - {job.last_working_date}
            </p>
          </div>
          <p className="description">{job.description}</p>
          <p className="skills">Skills: {job.skills.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default Experience;
