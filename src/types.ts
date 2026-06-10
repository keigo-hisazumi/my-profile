export interface SocialLink {
  name: string
  url: string
  icon: string
  username?: string
}

export interface HeroData {
  name: string
  occupation: string
  description?: string
  socialLinks: SocialLink[]
}

export interface InfoCard {
  icon: string
  title: string
  value: string
}

export interface AboutData {
  paragraphs: string[]
  infoCards: InfoCard[]
  socialLinks?: SocialLink[]
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface PortfolioProject {
  id: number
  title: string
  description: string
  image?: string
  youtubeId?: string
  tags: string[]
  demoUrl?: string
  demoLabel?: string
  sourceUrl?: string
  sourceLabel?: string
}

export interface PricingImage {
  src: string
  alt: string
}

export interface PricingData {
  images: PricingImage[]
}

export interface EquipmentCategory {
  category: string
  items: string[]
}

export interface ProfileData {
  hero: HeroData
  about: AboutData
  pricing?: PricingData
  skills?: SkillCategory[]
  portfolio: PortfolioProject[]
  equipment?: EquipmentCategory[]
}
