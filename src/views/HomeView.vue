<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>MacBook Pro<br>Development Environment</h1>
        <p>Complete step-by-step guide to set up your MacBook Pro for advanced software development, data science, and LLM development with C#, Python, and AI tools.</p>
        <div class="buttons">
          <router-link to="/guide" class="btn btn-primary">
            Start Setup Guide →
          </router-link>
          <a href="#phases" class="btn btn-secondary">
            Browse All Phases ↓
          </a>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section id="overview" class="section section-gray">
      <div class="container">
        <h2 class="section-title">What You'll Set Up</h2>
        <p class="section-subtitle">Transform your MacBook Pro into a powerful development machine with these essential tools and frameworks</p>
        
        <div class="grid grid-3">
          <div class="card">
            <svg class="card-icon" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3>Development Tools</h3>
            <p>VS Code, Rider, PyCharm, and essential development utilities for a complete coding experience</p>
          </div>
          
          <div class="card">
            <svg class="card-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <h3>Programming Languages</h3>
            <p>Python 3.11+, .NET 8, with comprehensive version management tools</p>
          </div>
          
          <div class="card">
            <svg class="card-icon" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
            </svg>
            <h3>AI & Machine Learning</h3>
            <p>LLMs, PyTorch, TensorFlow, HuggingFace, and local AI tools for cutting-edge development</p>
          </div>
          
          <div class="card">
            <svg class="card-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"></path>
            </svg>
            <h3>Databases</h3>
            <p>PostgreSQL, MongoDB, Redis, and modern vector databases for comprehensive data management</p>
          </div>
          
          <div class="card">
            <svg class="card-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
            </svg>
            <h3>DevOps Tools</h3>
            <p>Docker, Git, terminal enhancements, and modern deployment tools</p>
          </div>
          
          <div class="card">
            <svg class="card-icon" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
            </svg>
            <h3>Local LLMs</h3>
            <p>Ollama, LM Studio, GPT4All for running powerful language models locally</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Phases Overview Section -->
    <section id="phases" class="section">
      <div class="container">
        <h2 class="section-title">Setup Phases</h2>
        <p class="section-subtitle">11 phases to fully configure your Mac — click any phase to jump directly to those instructions.</p>
        <div class="phases-overview-grid">
          <router-link
            v-for="phase in setupPhases"
            :key="phase.phase"
            :to="`/guide#phase-${phase.phase}`"
            class="phase-overview-card"
          >
            <span class="phase-overview-num">{{ phase.phase }}</span>
            <span class="phase-overview-title">{{ phase.title }}</span>
            <span class="phase-overview-arrow">→</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Prerequisites Section -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Prerequisites</h2>
        <div class="prerequisites">
          <ul>
            <li>MacBook Pro with Apple Silicon (M1/M2/M3) recommended</li>
            <li>macOS Monterey (12.0) or later</li>
            <li>At least 16GB RAM (32GB+ recommended for LLM work)</li>
            <li>500GB+ free storage space</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section section-gray">
      <div class="container text-center">
        <h2 class="section-title">Ready to Get Started?</h2>
        <p class="section-subtitle">Follow our comprehensive guide to transform your MacBook Pro into a powerful development machine.</p>
        <div class="buttons">
          <router-link to="/guide" class="btn btn-primary">
            Start Full Guide →
          </router-link>
          <router-link to="/guide#verification" class="btn btn-secondary">
            Verification Script ✓
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { setupPhases } from '@/data/setupGuide.js'

export default {
  name: 'HomeView',
  data() {
    return { setupPhases }
  }
}
</script>