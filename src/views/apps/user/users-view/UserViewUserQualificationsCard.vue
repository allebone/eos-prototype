<template>
  <b-card
    no-body
  >
    <b-card-body>
      <b-card-title>Certifications</b-card-title>
      <b-card-sub-title>Certifications According To Roles</b-card-sub-title>
    </b-card-body>
    <b-table
      striped
      responsive
      :items="certificationsData"
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
    const certificationsData = [
      {
        module: 'Navy',
        certified: true,
        certifier: false,
        instructor: false,
        evaluator: false,
      },
      {
        module: 'Tactical',
        certified: false,
        certifier: true,
        instructor: false,
        evaluator: false,
      },
      {
        module: 'Gunner',
        certified: true,
        certifier: true,
        instructor: true,
        evaluator: true,
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
