<template>
  <section id="skills" class="skills">
    <h2 class="section-title">スキル</h2>
    <div class="skills-content">
      <div class="skill-category">
        <h3>フロントエンド</h3>
        <div class="skill-items">
          <div class="skill-item">
            <span class="skill-name">Vue.js</span>
            <div class="skill-bar">
              <div class="skill-level" style="width: 90%"></div>
            </div>
          </div>
          <div class="skill-item">
            <span class="skill-name">React</span>
            <div class="skill-bar">
              <div class="skill-level" style="width: 85%"></div>
            </div>
          </div>
          <div class="skill-item">
            <span class="skill-name">JavaScript / TypeScript</span>
            <div class="skill-bar">
              <div class="skill-level" style="width: 88%"></div>
            </div>
          </div>
          <div class="skill-item">
            <span class="skill-name">HTML / CSS</span>
            <div class="skill-bar">
              <div class="skill-level" style="width: 95%"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="skill-category">
        <h3>バックエンド</h3>
        <div class="skill-items">
          <div class="skill-item">
            <span class="skill-name">Node.js</span>
            <div class="skill-bar">
              <div class="skill-level" style="width: 85%"></div>
            </div>
          </div>
          <div class="skill-item">
            <span class="skill-name">Python</span>
            <div class="skill-bar">
              <div class="skill-level" style="width: 80%"></div>
            </div>
          </div>
          <div class="skill-item">
            <span class="skill-name">Database (SQL/NoSQL)</span>
            <div class="skill-bar">
              <div class="skill-level" style="width: 75%"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="skill-category">
        <h3>その他</h3>
        <div class="skill-items">
          <div class="skill-item">
            <span class="skill-name">Git / GitHub</span>
            <div class="skill-bar">
              <div class="skill-level" style="width: 90%"></div>
            </div>
          </div>
          <div class="skill-item">
            <span class="skill-name">Docker</span>
            <div class="skill-bar">
              <div class="skill-level" style="width: 70%"></div>
            </div>
          </div>
          <div class="skill-item">
            <span class="skill-name">CI/CD</span>
            <div class="skill-bar">
              <div class="skill-level" style="width: 75%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills'
}
</script>

<style scoped>
.skills {
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

.skills-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.skill-category {
  margin-bottom: 2.5rem;
}

.skill-category h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 0.5rem;
}

.skill-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-name {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-color);
}

.skill-bar {
  height: 24px;
  background-color: var(--secondary-color);
  border-radius: 12px;
  overflow: hidden;
}

.skill-level {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), #6cb2ff);
  transition: width 1s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0.5rem;
  color: white;
  font-weight: bold;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .skills-content {
    padding: 0 1rem;
  }
  
  .skill-category h3 {
    font-size: 1.3rem;
  }
}
</style>
