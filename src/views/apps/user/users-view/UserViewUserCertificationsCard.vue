<template>
  <b-card
    no-body
  >
    <b-card-body>
      <b-card-title>Qualifications</b-card-title>
      <b-card-sub-title>Qualifications According To Roles</b-card-sub-title>
    </b-card-body>
    <b-table
      striped
      responsive
      :items="qualificationsData"
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
    const qualificationsData = [
      {
        mds: 'RC-135S',
        mission: true,
        instructor: true,
        evaluator: true,
      },
      {
        mds: 'RC-135U',
        mission: true,
        instructor: true,
        evaluator: true,
      },
      {
        mds: 'RC-135V',
        mission: true,
        instructor: true,
        evaluator: true,
      },
      {
        mds: 'RC-135W',
        mission: true,
        instructor: true,
        evaluator: true,
      },
      {
        mds: 'TC-135W',
        mission: true,
        instructor: true,
        evaluator: true,
      },
      {
        mds: 'OC-135B',
        mission: false,
        instructor: false,
        evaluator: false,
      },
      {
        mds: 'WC-135B',
        mission: false,
        instructor: false,
        evaluator: false,
      },
    ]

    return {
      qualificationsData,
    }
  },
}
</script>

<style>

</style>
