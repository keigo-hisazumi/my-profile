import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

interface Props {
  currentProfile: string
}

export default function Header({ currentProfile }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => setIsMenuOpen(prev => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  const handleProfileToggle = () => {
    navigate('/sound')
    closeMenu()
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <h1 className={styles.logo}>My Profile</h1>
          <button
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="メニュー"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
            <li><a href="#about" onClick={closeMenu}>自己紹介</a></li>
            {currentProfile === 'soundEngineer' && (
              <li><a href="#pricing" onClick={closeMenu}>料金表</a></li>
            )}
            {currentProfile === 'webDeveloper' && (
              <li><a href="#skills" onClick={closeMenu}>スキル</a></li>
            )}
            <li><a href="#portfolio" onClick={closeMenu}>ポートフォリオ</a></li>
            {currentProfile === 'soundEngineer' && (
              <li><a href="#equipment" onClick={closeMenu}>所持機材</a></li>
            )}
            {currentProfile === 'webDeveloper' && (
              <li>
                <button
                  onClick={handleProfileToggle}
                  className={styles.profileToggle}
                  title="音響エンジニアプロフィールに切り替え"
                >
                  <span className={styles.toggleIcon}>🎵</span>
                  <span className={styles.toggleTextStack}>
                    <span>音響</span>
                  </span>
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}
