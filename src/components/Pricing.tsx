import type { PricingData } from '../types'
import styles from './Pricing.module.css'

interface Props {
  profileData: PricingData
}

export default function Pricing({ profileData }: Props) {
  return (
    <section id="pricing" className={styles.pricing}>
      <h2 className={styles.sectionTitle}>料金表</h2>
      <div className={styles.pricingGrid}>
        {profileData.images.map(item => (
          <div key={item.alt} className={styles.pricingItem}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}
