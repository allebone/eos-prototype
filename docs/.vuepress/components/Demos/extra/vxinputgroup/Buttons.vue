<template>
  <div>
    <!-- Basic -->
    <vx-input-group class="mb-6">
      <template slot="prepend">
        <div class="prepend-text btn-addon">
          <vs-button color="primary">Button</vs-button>
        </div>
      </template>

      <vs-input v-model="input1" />
    </vx-input-group>
    <!-- /Basic -->

    <!-- Append Button -->
    <vx-input-group class="mb-6">
      <vs-input v-model="input2" />

      <template slot="append">
        <div class="append-text btn-addon">
          <vs-button color="primary">Button</vs-button>
        </div>
      </template>
    </vx-input-group>
    <!-- /Append Button -->

    <!-- Prepend Two Buttons -->
    <vx-input-group class="mb-6">
      <template slot="prepend">
        <div class="prepend-text btn-addon">
          <vs-button color="primary" type="border">Button1</vs-button>
          <vs-button color="primary" type="border">Button2</vs-button>
        </div>
      </template>

      <vs-input v-model="input3" />
    </vx-input-group>
    <!-- /Prepend Two Buttons -->

    <!-- Append Two Buttons -->
    <vx-input-group class="mb-6">
      <vs-input v-model="input4" />

      <template slot="append">
        <div class="append-text btn-addon">
          <vs-button color="primary" type="border">Button1</vs-button>
          <vs-button color="primary" type="border">Button2</vs-button>
        </div>
      </template>
    </vx-input-group>
    <!-- /Append Two Buttons -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
</script>
