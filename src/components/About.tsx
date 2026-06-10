import type { AboutData } from '../types'
import SocialIcon from './SocialIcon'
import styles from './About.module.css'

interface Props {
  profileData: AboutData
}

export default function About({ profileData }: Props) {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.sectionTitle}>自己紹介</h2>
      <div className={styles.aboutContent}>
        {profileData.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {profileData.infoCards && profileData.infoCards.length > 0 && (
          <div className={styles.infoCards}>
            {profileData.infoCards.map(card => (
              <div key={card.title} className={styles.infoCard}>
                <h3>{card.icon} {card.title}</h3>
                <p>{card.value}</p>
              </div>
            ))}
          </div>
        )}
        {profileData.socialLinks && profileData.socialLinks.length > 0 && (
          <div className={styles.socialCards}>
            {profileData.socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={styles.socialCard}
              >
                <div className={styles.socialIcon}>
                  <SocialIcon icon={link.icon} />
                </div>
                <div className={styles.socialInfo}>
                  <span className={styles.socialName}>{link.name}</span>
                  {link.username && (
                    <span className={styles.socialUsername}>@{link.username}</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
