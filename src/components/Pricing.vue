<template>
  <section id="pricing" class="pricing">
    <h2 class="section-title">料金表</h2>
    <div class="pricing-grid">
      <div v-for="item in profileData.images" :key="item.alt" class="pricing-item">
        <img :src="item.src" :alt="item.alt" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Pricing',
  props: {
    profileData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.pricing {
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

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
}

.pricing-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
}
</style>
