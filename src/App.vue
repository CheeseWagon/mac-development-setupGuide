<template>
  <div id="app">
    <AppHeader />
    <main>
      <RouterView />
    </main>
    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 MacBook Development Setup Guide. Built with Vue.js &amp; Vite</p>
        <p class="footer-links">
          <a href="https://mango-grass-0d750d60f.7.azurestaticapps.net" target="_blank" rel="noopener">🌐 Live on Azure Static Web Apps</a>
          <span class="footer-sep">·</span>
          <a href="https://github.com/CheeseWagon/mac-development-setupGuide" target="_blank" rel="noopener">GitHub</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>