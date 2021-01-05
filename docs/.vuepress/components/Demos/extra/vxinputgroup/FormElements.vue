<template>
  <div>
    <!-- CHECKBOX -->
    <vx-input-group class="mb-6" prependClasses="border border-solid border-grey border-r-0">
      <template slot="prepend">
        <div class="prepend-text">
          <vs-checkbox v-model="checkbox1"></vs-checkbox>
        </div>
      </template>

      <vs-input v-model="input1" />
    </vx-input-group>
    <!-- /CHECKBOX -->

    <!-- RADIO -->
    <vx-input-group class="mb-6" prependClasses="border border-solid border-grey border-r-0">
      <template slot="prepend">
        <div class="prepend-text">
          <vs-radio v-model="radios1" vs-value="radio1"></vs-radio>
        </div>
      </template>

      <vs-input v-model="input2" />
    </vx-input-group>
    <!-- /RADIO -->

    <!-- SWITCH -->
    <vx-input-group class="mb-6" prependClasses="border border-solid border-grey border-r-0">
      <template slot="prepend">
        <div class="prepend-text">
          <vs-switch v-model="switch1" />
        </div>
      </template>

      <vs-input v-model="input3" />
    </vx-input-group>
    <!-- /SWITCH -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox1: false,
      radios1: null,
      switch1: false,
      input1: '',
      input2: '',
      input3: ''
    }
  }
}
</script>
