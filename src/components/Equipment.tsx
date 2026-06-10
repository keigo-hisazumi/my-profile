import type { EquipmentCategory } from '../types'
import styles from './Equipment.module.css'

interface Props {
  profileData: EquipmentCategory[]
}

export default function Equipment({ profileData }: Props) {
  return (
    <section id="equipment" className={styles.equipment}>
      <h2 className={styles.sectionTitle}>所持機材</h2>
      <div className={styles.equipmentContent}>
        {profileData.map(category => (
          <div key={category.category} className={styles.equipmentCategory}>
            <h3>{category.category}</h3>
            <ul className={styles.equipmentItems}>
              {category.items.map((item, index) => (
                <li key={index} className={styles.equipmentItem}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
