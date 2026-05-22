<template>
  <section id="portfolio" class="portfolio">
    <h2 class="section-title">ポートフォリオ</h2>
    <div class="portfolio-grid">
      <div v-for="project in profileData" :key="project.id" class="project-card">
        <div class="project-image">
          <iframe
            v-if="project.youtubeId"
            :src="`https://www.youtube.com/embed/${project.youtubeId}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <img v-else :src="project.image" :alt="project.title" />
        </div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <div class="project-links">
            <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" class="btn-demo">{{ project.demoLabel }}</a>
            <a v-if="project.sourceUrl" :href="project.sourceUrl" target="_blank" class="btn-github">{{ project.sourceLabel }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Portfolio',
  props: {
    profileData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.portfolio {
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

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
}

.project-card {
  background-color: var(--secondary-color);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.project-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.project-image img,
.project-image iframe {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 0;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: var(--text-color);
}

.project-content p {
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #666;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background-color: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.btn-demo,
.btn-github {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  text-align: center;
  flex: 1;
}

.btn-demo {
  background-color: var(--primary-color);
  color: white;
}

.btn-demo:hover {
  background-color: #3a7bc8;
}

.btn-github {
  background-color: #333;
  color: white;
}

.btn-github:hover {
  background-color: #555;
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
}
</style>
