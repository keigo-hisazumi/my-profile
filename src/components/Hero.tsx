import type { HeroData } from '../types'
import SocialIcon from './SocialIcon'
import styles from './Hero.module.css'

interface Props {
  profileData: HeroData
}

export default function Hero({ profileData }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.profileImage}>
          <img src={`${import.meta.env.BASE_URL}profile.png`} alt="Profile Photo" />
        </div>
        <div className={styles.heroText}>
          <h1 className={styles.name}>{profileData.name}</h1>
          <p className={styles.occupation}>{profileData.occupation}</p>
          {profileData.description && (
            <p className={styles.description}>{profileData.description}</p>
          )}
          <div className={styles.socialLinks}>
            {profileData.socialLinks.map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noreferrer" title={link.name}>
                <SocialIcon icon={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
