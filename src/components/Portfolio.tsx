import type { PortfolioProject } from '../types'
import styles from './Portfolio.module.css'

interface Props {
  profileData: PortfolioProject[]
}

export default function Portfolio({ profileData }: Props) {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2 className={styles.sectionTitle}>ポートフォリオ</h2>
      <div className={styles.portfolioGrid}>
        {profileData.map(project => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImage}>
              {project.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img src={project.image} alt={project.title} />
              )}
            </div>
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.projectTags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className={styles.btnDemo}>
                    {project.demoLabel}
                  </a>
                )}
                {project.sourceUrl && (
                  <a href={project.sourceUrl} target="_blank" rel="noreferrer" className={styles.btnGithub}>
                    {project.sourceLabel}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
