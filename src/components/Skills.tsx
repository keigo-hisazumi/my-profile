import type { SkillCategory } from '../types'
import styles from './Skills.module.css'

interface Props {
  profileData: SkillCategory[]
}

export default function Skills({ profileData }: Props) {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.sectionTitle}>スキル</h2>
      <div className={styles.skillsContent}>
        {profileData.map(category => (
          <div key={category.category} className={styles.skillCategory}>
            <h3>{category.category}</h3>
            <ul className={styles.skillItems}>
              {category.items.map((item, index) => (
                <li key={index} className={styles.skillItem}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
