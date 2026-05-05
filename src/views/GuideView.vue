<template>
  <div>
    <section class="section section-gray">
      <div class="container">
        <div class="text-center">
          <h2 class="section-title">Complete Setup Guide</h2>
          <p class="section-subtitle">
            Follow these {{ setupPhases.length }} phases to completely configure your MacBook Pro for development.
          </p>
        </div>

        <!-- Progress Indicator -->
        <div class="progress-track">
          <div
            v-for="phase in setupPhases"
            :key="phase.phase"
            class="progress-step"
          >
            <a :href="`#phase-${phase.phase}`" class="progress-step-num progress-step-link" :title="phase.title">{{ phase.phase }}</a>
            <div v-if="phase.phase < setupPhases.length" class="progress-connector"></div>
          </div>
        </div>

        <!-- Setup Phases -->
        <div>
          <PhaseSection
            v-for="phase in setupPhases"
            :key="phase.phase"
            :phase-number="phase.phase"
            :title="phase.title"
            :steps="phase.steps"
          />
        </div>

        <!-- Verification Section -->
        <section id="verification" class="verify-box">
          <h2>🔍 Verification Script</h2>
          <p>Use this Python script to verify your installation:</p>
          <div class="code-block">
            <pre>{{ verificationScript }}</pre>
          </div>
          <div class="verify-run">
            <p>To run the script:</p>
            <code>python ~/verify_setup.py</code>
          </div>
        </section>

        <!-- Maintenance Section -->
        <section id="maintenance" class="maintain-box">
          <h2>🔧 Maintenance Commands</h2>
          <p>Keep your development environment up to date with these regular maintenance commands:</p>
          <div
            v-for="(command, index) in maintenanceCommands"
            :key="index"
            class="maintain-item"
          >
            <h3>{{ command.title }}</h3>
            <div class="code-block">
              <pre>{{ command.code }}</pre>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import PhaseSection from '@/components/sections/PhaseSection.vue'
import { setupPhases, verificationScript, maintenanceCommands } from '@/data/setupGuide.js'

export default {
  name: 'GuideView',
  components: {
    PhaseSection
  },
  data() {
    return {
      setupPhases,
      verificationScript,
      maintenanceCommands
    }
  }
}
</script>
