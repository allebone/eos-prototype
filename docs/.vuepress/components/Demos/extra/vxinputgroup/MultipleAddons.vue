<template>
  <div>
    <!-- ADDONS PREPEND -->
    <vx-input-group class="mb-6">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>$</span>
        </div>
        <div class="prepend-text bg-primary">
          <span>0.00</span>
        </div>
      </template>

      <vs-input v-model="title1" />
    </vx-input-group>
    <!-- /ADDONS PREPEND -->

    <!-- ADDONS APPEND -->
    <vx-input-group class="mb-6">
      <template slot="append">
        <div class="append-text bg-primary">
          <span>$</span>
        </div>
        <div class="append-text bg-primary">
          <span>0.00</span>
        </div>
      </template>

      <vs-input v-model="title2" />
    </vx-input-group>
    <!-- /ADDONS APPEND -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      title1: '',
      title2: '',
    }
  }
}
</script>
