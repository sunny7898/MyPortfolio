import React from "react";
import "./Experience.css";

const workData = [
  {
    company_name: "IBM ISDL",
    joining_date: "October 2023",
    last_working_date: "Present",
    role: "Storage Developer",
    description:
      "Responsible for developing and maintaining scalable storage solutions, focusing on performance optimization, and ensuring data reliability.",
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
      "Worked on financial software solutions, focusing on optimizing transaction processes, enhancing data security, and ensuring compliance with regulatory standards.",
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
