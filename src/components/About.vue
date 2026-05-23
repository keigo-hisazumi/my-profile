<template>
  <section id="about" class="about">
    <h2 class="section-title">自己紹介</h2>
    <div class="about-content">
      <p v-for="(paragraph, index) in profileData.paragraphs" :key="index">
        {{ paragraph }}
      </p>
      <div v-if="profileData.infoCards && profileData.infoCards.length" class="info-cards">
        <div v-for="card in profileData.infoCards" :key="card.title" class="info-card">
          <h3>{{ card.icon }} {{ card.title }}</h3>
          <p>{{ card.value }}</p>
        </div>
      </div>
      <div v-if="profileData.socialLinks && profileData.socialLinks.length" class="social-cards">
        <a v-for="link in profileData.socialLinks" :key="link.name" :href="link.url" target="_blank" class="social-card">
          <div class="social-icon">
            <svg v-if="link.icon === 'discord'" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.043.036.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <svg v-else-if="link.icon === 'twitter'" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            <svg v-else-if="link.icon === 'bluesky'" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/>
            </svg>
            <svg v-else-if="link.icon === 'youtube'" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
          <div class="social-info">
            <span class="social-name">{{ link.name }}</span>
            <span v-if="link.username" class="social-username">@{{ link.username }}</span>
          </div>
        </a>
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

.social-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.social-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background-color: var(--secondary-color);
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.3s;
}

.social-card:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.social-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.social-name {
  font-weight: 600;
  font-size: 0.95rem;
}

.social-username {
  font-size: 0.8rem;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .about-content {
    padding: 0 1rem;
  }

  .about-content p {
    font-size: 1rem;
  }

  .info-cards,
  .social-cards {
    grid-template-columns: 1fr;
  }
}
</style>
