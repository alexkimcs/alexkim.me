import * as React from "react"
import Parser from 'html-react-parser';
import "./other-projects.scss"

const otherProjectsData = [
  {
    "name": "Skeji",
    "url": "https://github.com/henrytan2/skeji",
    "description": "Developed full-stack appointment booking site for business’ to automate phone call processes between service providers and clients. <br> <a class='small' href='https://github.com/skavinvarnan/whistler-ios'>👨🏻‍💻Github Source Code👨🏻‍💻</a>",
    "used": [
      {"thing": "Node.js"},
      {"thing": "React"},
      {"thing": "Typescript"},
      {"thing": "Express.js"},
      {"thing": "PostgresSQL"},
      {"thing": "Docker"},
      {"thing": "Prisma"},
      {"thing": "Tailwind"},
    ]
  },
  {
    "name": "Moon App",
    "url": "https://",
    "description": "Developed a full-stack Ethereum trading application featuring a Python-based KrakenAPI algorithm controlled via a ReactJS and Django dashboard. <br> <a class='small' href='https://github.com/COVID19-SARS-CoV-2/web-covid-api'>👨🏻‍💻API Documentation👨🏻‍💻</a>",
    "used": [
      {"thing": "Python"},
      {"thing": "Node.js"},
      {"thing": "API"},
      {"thing": "React"},
      {"thing": "Django"},
    ]
  },
  {
    "name": "Spotify React",
    "url": "https://github.com/alexkimcs/spotify-profile-reactapp",
    "description": "A full-stack data visualization tool that authenticates users via Spotify OAuth to display real-time listening statistics.",
    "used": [
      {"thing": "Node.js"},
      {"thing": "React"},
      {"thing": "Express.js"},
      {"thing": "API"}
    ]
  }
]

const FeaturedProjects = () => (
  <section className="section other-projects">
    <div className="section__title">Other Projects</div>
    <div className="section__content">
      {
        otherProjectsData.map((project) => (
          <div className="project">
            <div className="project__name">
              <a href={project.url} target="_blank" rel="noreferrer" className="arrow-link">{project.name}</a>
            </div>
            <p>{Parser(project.description)}</p>
            <div className="project__used">
              {
                project.used.map((item) => (
                  <span className="project__used__item">{item.thing}</span>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  </section>
)

export default FeaturedProjects
