<template>
  <div class="phase">
    <div class="phase-header">
      <span class="phase-number">{{ phaseNumber }}</span>
      <h3>{{ title }}</h3>
    </div>
    <div>
      <div v-for="(step, index) in steps" :key="index" class="step">
        <h4>{{ step.title }}</h4>
        <div v-if="step.description" class="step-desc" v-html="step.description"></div>
        <div v-if="step.code" class="code-block">
          <pre>{{ step.code }}</pre>
        </div>
        <div v-if="step.links && step.links.length" class="step-links">
          <a
            v-for="link in step.links"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="step-link"
          >{{ link.label }} ↗</a>
        </div>
        <div v-if="step.tip" class="alert alert-info" v-html="'💡 ' + step.tip"></div>
        <div v-if="step.note" class="alert alert-warning">
          <p>{{ step.note }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhaseSection',
  props: {
    phaseNumber: { type: Number, required: true },
    title: { type: String, required: true },
    steps: { type: Array, required: true }
  }
}
</script>
