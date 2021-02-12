<template>
  <b-card
    no-body
  >
    <b-card-body>
      <b-card-title>Languages</b-card-title>
      <b-card-sub-title>Languages Assigned by CLPM</b-card-sub-title>
    </b-card-body>
    <b-table
      striped
      responsive
      :items="languagesData"
      class="mb-0"
    >

      <template #cell(module)="data">
        {{ data.value }}
      </template>
      <template #cell()="data">
        <b-form-checkbox
          disabled
          :checked="data.value"
        />
      </template>

    </b-table>
  </b-card>
</template>

<script>
import {
  BCard, BTable, BCardBody, BCardTitle, BCardSubTitle, BFormCheckbox,
} from 'bootstrap-vue'

export default {
  components: {
    BCard, BTable, BCardBody, BCardTitle, BCardSubTitle, BFormCheckbox,
  },
  setup() {
    const languagesData = [
      {
        module: 'French',
        written: '3',
        spoken: '2',
      },
      {
        module: 'German',
        written: '2',
        spoken: '1',
      },
      {
        module: 'Arabic',
        written: '2',
        spoken: '1',
      },
    ]

    return {
      certificationsData,
    }
  },
}
</script>

<style>

</style>
