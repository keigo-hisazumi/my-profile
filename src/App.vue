<template>
  <div class="app">
    <Header :currentProfile="currentProfile" />
    <main class="container">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { Header, Footer },
  computed: {
    currentProfile() {
      return this.$route.meta?.profile || 'soundEngineer'
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
