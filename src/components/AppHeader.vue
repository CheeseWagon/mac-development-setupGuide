<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">🚀 MacBook Dev Setup</div>
        <nav class="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/guide">Full Guide</router-link>
          <router-link to="/#phases">Phases</router-link>
          <router-link to="/guide#verification">Verification</router-link>
          <router-link to="/guide#maintenance">Maintenance</router-link>
        </nav>
        <button class="mobile-menu-btn" @click="toggleMobile">☰</button>
      </div>
      <nav class="mobile-nav" :class="{ active: showMobile }">
        <router-link to="/" @click="showMobile = false">Home</router-link>
        <router-link to="/guide" @click="showMobile = false">Full Guide</router-link>
        <router-link to="/#phases" @click="showMobile = false">Phases</router-link>
        <router-link to="/guide#verification" @click="showMobile = false">Verification</router-link>
        <router-link to="/guide#maintenance" @click="showMobile = false">Maintenance</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      showMobile: false
    }
  },
  methods: {
    toggleMobile() {
      this.showMobile = !this.showMobile
    }
  }
}
</script>