<template>
  <div class="app">
    <Header :currentProfile="currentProfile" @toggle-profile="toggleProfile" />
    <main class="container">
      <Hero :profileData="profileData.hero" />
      <About :profileData="profileData.about" />
      <Skills v-if="profileData.skills" :profileData="profileData.skills" />
      <Equipment v-if="profileData.equipment" :profileData="profileData.equipment" />
      <Portfolio :profileData="profileData.portfolio" />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Equipment from './components/Equipment.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import { profiles } from './data/profiles.js'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    About,
    Skills,
    Equipment,
    Portfolio,
    Contact,
    Footer
  },
  data() {
    return {
      currentProfile: 'soundEngineer',
      profiles: profiles
    }
  },
  computed: {
    profileData() {
      return this.profiles[this.currentProfile]
    }
  },
  methods: {
    toggleProfile() {
      this.currentProfile = this.currentProfile === 'webDeveloper' ? 'soundEngineer' : 'webDeveloper'
    }
  }
}
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding: 40px 20px;
}
</style>
