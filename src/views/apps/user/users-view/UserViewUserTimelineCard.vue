<template>
  <b-card title="User Timeline">
    <app-timeline>

            <app-timeline-item>
        <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
          <h6>New Qualification</h6>
          <small class="text-muted">12 min ago</small>
        </div>
        <p>All Requirements for Qualification have been completed.</p>
        <p class="mb-0">
          <b-img
            :src="require('@/assets/images/icons/pdf.png')"
            height="auto"
            width="20"
            class="mr-1"
          />
          <span class="align-bottom">Form8.pdf</span>
        </p>
      </app-timeline-item>
      <app-timeline-item variant="warning">

        <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
          <h6>New Certification</h6>
          <small class="text-muted">45 min ago</small>
        </div>
        <p>New Certification has been approved by your Commander</p>
        <b-media>
          <template #aside>
            <b-avatar :src="require('@/assets/images/avatars/8-small.png')" />
          </template>
          <h6>Jose Zambrano, Lt Col (Commander)</h6>
          <p class="mb-0">
            338th CTS
          </p>
        </b-media>
      </app-timeline-item>
      <app-timeline-item
        variant="info"
        title="Post Mission Review Complete"
        subtitle="TOPCT25 - 23JAN21"
        time="2 days ago"
      />
    </app-timeline>
  </b-card>
</template>

<script>
import {
  BCard, BImg, BMedia, BAvatar,
} from 'bootstrap-vue'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'

export default {
  components: {
    BCard,
    BImg,
    BMedia,
    BAvatar,
    AppTimeline,
    AppTimelineItem,
  },
}
</script>

<style>

</style>
