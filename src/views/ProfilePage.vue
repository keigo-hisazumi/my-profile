<template>
  <div>
    <Hero :profileData="profileData.hero" />
    <About :profileData="profileData.about" />
    <Pricing v-if="profileData.pricing" :profileData="profileData.pricing" />
    <Skills v-if="profileData.skills" :profileData="profileData.skills" />
    <Equipment v-if="profileData.equipment" :profileData="profileData.equipment" />
    <Portfolio :profileData="profileData.portfolio" />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Equipment from '../components/Equipment.vue'
import Portfolio from '../components/Portfolio.vue'
import Pricing from '../components/Pricing.vue'
import { profiles } from '../data/profiles.js'

export default {
  name: 'ProfilePage',
  components: { Hero, About, Skills, Equipment, Portfolio, Pricing },
  props: {
    profileKey: {
      type: String,
      required: true
    }
  },
  computed: {
    profileData() {
      return profiles[this.profileKey]
    }
  }
}
</script>
