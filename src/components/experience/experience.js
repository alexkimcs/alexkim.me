import * as React from "react"
import "./experience.scss"


const experienceData = [
  {
    "company": "Raytheon",
    "url": "https://talkingyak.com/",
    "time": "June 2024 - Present",
    "position": "Software Engineer II - Infrastructure"
  },
  {
    "company": "Pax8",
    "url": "https://www.pax8.com/",
    "time": "May 2022 - April 2024",
    "position": "Software Engineer in Test"
  },
]

const Experience = () => (
  <section className="section experience">
    <div className="section__title">Experience</div>
    <div className="section__content">
      <div className="jobs">
        {
          experienceData.map((data) => (
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href={data.url} target="_blank" rel="noreferrer">{data.company}</a>
                </div>
                <div className="job__time">{data.time}</div>
              </div>
              <div className="job__position">{data.position}</div>
            </div>
          ))
        }
      </div>

      <a href="./AlexKimCV_SWE.pdf" target="_blank" rel="noreferrer" className="arrow-link">View My Resume</a>
    </div>
  </section>
)

export default Experience
