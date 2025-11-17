import java from '../../assets/icons/java.svg'
import spring from '../../assets/icons/spring.svg'
import js from '../../assets/icons/js.svg'
import react from '../../assets/icons/react.svg'
import sql from '../../assets/icons/sql.svg'
import html from '../../assets/icons/html.svg'
import mongo from '../../assets/icons/mongo.svg'
import ssh from '../../assets/icons/ssh.svg'
import linux from '../../assets/icons/linux.svg'
import git from '../../assets/icons/git.svg'

import { TechnologieCard } from './TechnologieCard'

export const TechnologiesList = ({stack, framework, tool}) => {
  const stacks = [
    { technologie: "Java", iconPath: java, description: "Backend development" },
    { technologie: "JavaScript", iconPath: js, description: "Web Development" },
    { technologie: "SQL", iconPath: sql, description: "Database Management" },
    { technologie: "MongoDB", iconPath: mongo, description: "NoSQL Database" },
    { technologie: "HTML", iconPath: html, description: "Web Structure" }
  ]

  const frameworks = [
    { technologie: "Spring Boot", iconPath: spring, description: "Backend development" },
    { technologie: "React", iconPath: react, description: "Frontend development" }
  ]

  const tools = [
    { technologie: "Linux", iconPath: linux, description: "Operating System" },
    { technologie: "OpenSSH", iconPath: ssh, description: "Secure connections" },
    { technologie: "Git", iconPath: git, description: "Version control" }
  ]

  return (
    <div className="technologies-container">
      {/* Stacks Section */}
      <section className="tech-section">
        <h2 className="tech-section-title">{stack}</h2>
        <div className="tech-grid">
          {stacks.map(({ technologie, iconPath, description }, idx) => (
            <TechnologieCard
              key={idx}
              name={technologie}
              iconPath={iconPath}
              description={description}
            />
          ))}
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="tech-section">
        <h2 className="tech-section-title">{framework}</h2>
        <div className="tech-grid">
          {frameworks.map(({ technologie, iconPath, description }, idx) => (
            <TechnologieCard
              key={idx}
              name={technologie}
              iconPath={iconPath}
              description={description}
            />
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="tech-section">
        <h2 className="tech-section-title">{tool}</h2>
        <div className="tech-grid">
          {tools.map(({ technologie, iconPath, description }, idx) => (
            <TechnologieCard
              key={idx}
              name={technologie}
              iconPath={iconPath}
              description={description}
            />
          ))}
        </div>
      </section>
    </div>
  )
}