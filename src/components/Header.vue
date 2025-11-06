<template>
  <header class="header">
    <div class="container">
      <nav>
        <h1 class="logo">My Profile</h1>
        <button class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }" aria-label="メニュー">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-links" :class="{ active: isMenuOpen }">
          <li><a href="#about" @click="closeMenu">About</a></li>
          <li><a href="#skills" @click="closeMenu">Skills</a></li>
          <li><a href="#portfolio" @click="closeMenu">Portfolio</a></li>
          <li><a href="#contact" @click="closeMenu">Contact</a></li>
          <li>
            <button @click="handleProfileToggle" class="profile-toggle" :title="toggleTitle">
              <span class="toggle-icon">{{ currentProfile === 'webDeveloper' ? '💻' : '🎵' }}</span>
              <span class="toggle-text">{{ currentProfile === 'webDeveloper' ? 'Web Dev' : '音響' }}</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    currentProfile: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  computed: {
    toggleTitle() {
      return this.currentProfile === 'webDeveloper' 
        ? '音響エンジニアプロフィールに切り替え' 
        : 'Webデベロッパープロフィールに切り替え'
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    handleProfileToggle() {
      this.$emit('toggle-profile')
      this.closeMenu()
    }
  }
}
</script>

<style scoped>
.header {
  background-color: white;
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: bold;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;
}

.hamburger span {
  width: 30px;
  height: 3px;
  background: var(--text-color);
  border-radius: 3px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(10.5px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-10.5px) rotate(-45deg);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--primary-color);
}

.profile-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, var(--primary-color), #6cb2ff);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(74, 144, 226, 0.3);
}

.profile-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.4);
}

.toggle-icon {
  font-size: 1.2rem;
}

.toggle-text {
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
  
  .nav-links {
    position: fixed;
    left: 0;
    top: 70px;
    flex-direction: column;
    background-color: white;
    width: 100%;
    text-align: center;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    gap: 0;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
  }
  
  .nav-links.active {
    max-height: 400px;
    opacity: 1;
    padding: 1rem 0;
  }
  
  .nav-links li {
    padding: 0.8rem 0;
  }
  
  .nav-links a {
    display: block;
    padding: 0.5rem 0;
    font-size: 1.1rem;
  }
  
  .profile-toggle {
    padding: 0.8rem 1.5rem;
    margin: 0.5rem auto;
    width: fit-content;
  }
}
</style>
