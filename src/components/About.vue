<template>
  <section id="about" class="about">
    <h2 class="section-title">自己紹介</h2>
    <div class="about-content">
      <p v-for="(paragraph, index) in profileData.paragraphs" :key="index">
        {{ paragraph }}
      </p>
      <div class="info-cards">
        <div v-for="card in profileData.infoCards" :key="card.title" class="info-card">
          <h3>{{ card.icon }} {{ card.title }}</h3>
          <p>{{ card.value }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  props: {
    profileData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.about {
  padding: 3rem 0;
  background: white;
  border-radius: 8px;
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--primary-color);
}

.about-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-content p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.info-card {
  background-color: var(--secondary-color);
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}

.info-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.info-card p {
  margin: 0;
  color: var(--text-color);
}

@media (max-width: 768px) {
  .about-content {
    padding: 0 1rem;
  }
  
  .about-content p {
    font-size: 1rem;
  }
  
  .info-cards {
    grid-template-columns: 1fr;
  }
}
</style>
