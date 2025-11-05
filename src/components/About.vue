<template>
  <section id="about" class="about">
    <h2 class="section-title">自己紹介</h2>
    <div class="about-content">
      <p>
        こんにちは！久積奎吾と申します。音響に情熱を持つ音響エンジニアです。
      </p>
      <p>
        音響技術専門学校を卒業後、レコーディングスタジオで5年間勤務し、
        様々なアーティストの録音、ミキシング、マスタリングを担当してきました。
      </p>
      <p>
        現在はフリーランスとして独立し、レコーディング、ライブPA、音響デザインなど
        幅広い音響制作に携わっています。常にクライアントのビジョンを実現し、
        最高の音質を追求することを心がけています。
      </p>
      <div class="info-cards">
        <div class="info-card">
          <h3>📍 所在地</h3>
          <p>東京都</p>
        </div>
        <div class="info-card">
          <h3>💼 職業</h3>
          <p>音響エンジニア</p>
        </div>
        <div class="info-card">
          <h3>🎓 学歴</h3>
          <p>音響技術専門学校卒業</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
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
  max-width: 800px;
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
