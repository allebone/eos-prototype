<template>
  <div>
    <!-- SMALL -->
    <vx-input-group class="mb-6">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Small</span>
        </div>
      </template>

      <vs-input v-model="input1" size="small" />
    </vx-input-group>
    <!-- /SMALL -->

    <!-- DEFAULT -->
    <vx-input-group class="mb-6">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Default</span>
        </div>
      </template>

      <vs-input v-model="input2" />
    </vx-input-group>
    <!-- /DEFAULT -->

    <!-- LARGE -->
    <vx-input-group>
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Large</span>
        </div>
      </template>

      <vs-input v-model="input3" size="large" />
    </vx-input-group>
    <!-- /LARGE -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: ''
    }
  }
}
</script>
