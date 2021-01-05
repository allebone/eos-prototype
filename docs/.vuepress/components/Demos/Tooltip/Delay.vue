<template lang="html">
  <div class="centerx examplex">
    <vx-tooltip text="Tooltip default delay">
      <vs-button>Delay default</vs-button>
    </vx-tooltip>
    <vx-tooltip delay=".5s" text="Tooltip delay 0.5s">
      <vs-button>Delay 0.5s</vs-button>
    </vx-tooltip>
    <vx-tooltip delay="2s" text="Tooltip delay 2s">
      <vs-button>Delay 2s</vs-button>
    </vx-tooltip>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
