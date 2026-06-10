import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Equipment from '../components/Equipment'
import Portfolio from '../components/Portfolio'
import Pricing from '../components/Pricing'
import { profiles } from '../data/profiles'

interface Props {
  profileKey: string
}

export default function ProfilePage({ profileKey }: Props) {
  const profileData = profiles[profileKey]

  return (
    <div>
      <Hero profileData={profileData.hero} />
      <About profileData={profileData.about} />
      {profileData.pricing && <Pricing profileData={profileData.pricing} />}
      {profileData.skills && <Skills profileData={profileData.skills} />}
      <Portfolio profileData={profileData.portfolio} />
      {profileData.equipment && <Equipment profileData={profileData.equipment} />}
    </div>
  )
}
