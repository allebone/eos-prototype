<template>
  <b-card
    v-if="data"
    no-body
    class="card-statistics"
  >
    <b-card-header>
      <b-card-title>Readiness Assessments</b-card-title>
      <b-card-text class="font-small-2 mr-25 mb-0">
        Updated 1 Week Ago
      </b-card-text>
    </b-card-header>
    <b-card-body class="statistics-body" align="center">
      <b-row align="center">
        <b-col
          v-for="item in data"
          :key="item.icon"
          xl="1"
          sm="3"
          :class="item.customClass"
          align="center"
        >
          <b-media no-body>
            <b-media-aside

              class="mr-2"
            >
              <b-avatar
                size="52"
                :variant="item.color"
              >
                <feather-icon
                  size="36"
                  :icon="item.icon"
                />
              </b-avatar>
            </b-media-aside>
            <b-media-body class="my-auto">
              <h3 class="font-weight-bolder mb-0">
                {{ item.title }}
              </h3>
              <b-card-text class="font-small-3 mb-0">
                {{ item.subtitle }}
              </b-card-text>
            </b-media-body>
          </b-media>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BCardText, BCardBody, BRow, BCol, BMedia, BMediaAside, BAvatar, BMediaBody,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
