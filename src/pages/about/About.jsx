import React from 'react';
import { Layout } from '../Layout';
import { ContentCard } from '../../components/shared/ContentCard';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../components/shared/TextBlock'
import './about.css'

export const About = () => {
  const { t } = useTranslation();
  const tStudies = (key, options) => t(`studies.${key}`, options);
  const tExperience = (key, options) => t(`experience.${key}`, options); // Corregido: "experiencie" → "experience"
  
  const experienceIds = ['eviden'];
  const studyIds = ['webDev', 'baccalaureate'];

  return (
    <Layout id="studies" backButton={true}>
      <ContentCard
        content="var(--blue)"
        title={"Experiencia"}
        main={
          <div className="experience-container">
            {experienceIds.map((expId, idx) => {
              const experience = tExperience(expId, { returnObjects: true });
              return (
                <div className="experience-main" key={idx}>
                  <div className="job-header">
                    <h3 className="job-title">{experience.position}</h3>
                    <div className="job-company">{experience.company}</div>
                  </div>
                  <div className="job-period-location">
                    <span className="job-period">{experience.period}</span>
                    <span className="job-location">{experience.location}</span>
                  </div>
                  <div className="job-responsibilities">
                    <p>{experience.responsibilities} </p>
                  </div>
                  <div className="job-skills">
                    <p>{experience.skills}</p>
                  </div>
                </div>
              );
            })}
          </div>
        }
      />
      <ContentCard
        content="var(--blue)"
        title={"Estudios"}
        main={
          <div className="studies-container">
            {studyIds.map((studyId, idx) => {
              const study = tStudies(studyId, { returnObjects: true });
              return (
                <div className="study-main" key={idx}>
                  <div className="study-header">
                    <h3 className="study-title">{study.title}</h3> {/* Agregado: título del estudio */}
                  </div>
                  <div className="study-period">{study.period}</div>
                  <div className="study-institution">{study.institution}</div>
                  <TextBlock text={study.content} />
                </div>
              );
            })}
          </div>
        }
      />
    </Layout>
  );
};