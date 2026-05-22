<template>
  <div>
    <Hero :profileData="profileData.hero" />
    <About :profileData="profileData.about" />
    <Skills v-if="profileData.skills" :profileData="profileData.skills" />
    <Equipment v-if="profileData.equipment" :profileData="profileData.equipment" />
    <Portfolio :profileData="profileData.portfolio" />
    <Contact />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Equipment from '../components/Equipment.vue'
import Portfolio from '../components/Portfolio.vue'
import Contact from '../components/Contact.vue'
import { profiles } from '../data/profiles.js'

export default {
  name: 'ProfilePage',
  components: { Hero, About, Skills, Equipment, Portfolio, Contact },
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
