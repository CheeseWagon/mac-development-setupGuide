<template>
  <div id="app">
    <AppHeader />
    <main>
      <RouterView />
    </main>
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 MacBook Development Setup Guide. Built with Vue.js</p>
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