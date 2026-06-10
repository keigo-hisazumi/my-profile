import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ProfilePage from './views/ProfilePage'
import styles from './App.module.css'

function AppLayout() {
  const location = useLocation()
  const currentProfile =
    location.pathname === '/my-profile/dev' ? 'webDeveloper' : 'soundEngineer'

  return (
    <div className={styles.app}>
      <Header currentProfile={currentProfile} />
      <main className={`container ${styles.main}`}>
        <Routes>
          <Route path="/" element={<ProfilePage profileKey="soundEngineer" />} />
          <Route path="/sound" element={<ProfilePage profileKey="soundEngineer" />} />
          <Route path="/dev" element={<Navigate to="/sound" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppLayout />
    </BrowserRouter>
  )
}
