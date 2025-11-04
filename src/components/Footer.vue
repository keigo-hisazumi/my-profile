<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ currentYear }} My Profile. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 2rem 0;
  text-align: center;
}

.footer p {
  margin: 0;
  font-size: 0.95rem;
}
</style>
