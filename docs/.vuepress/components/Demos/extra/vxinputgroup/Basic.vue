<template>
  <div>
    <!-- TITLE -->
    <vx-input-group class="mb-6">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>@</span>
        </div>
      </template>

      <vs-input v-model="title" placeholder="Email" />
    </vx-input-group>
    <!-- /TITLE -->

    <!-- URL -->
    <vx-input-group class="mb-6">
      <vs-input v-model="username" placeholder="Username" />

      <template slot="append">
        <div class="append-text bg-primary">
          <span>@url.com</span>
        </div>
      </template>
    </vx-input-group>
    <!-- /URL -->

    <!-- USERNAME -->
    <vx-input-group class="mb-6">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>https://pixinvent.com/users/</span>
        </div>
      </template>

      <vs-input v-model="siteUsername" />
    </vx-input-group>
    <!-- /USERNAME -->

    <!-- currency -->
    <vx-input-group class="mb-6">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>$</span>
        </div>
      </template>

      <vs-input v-model="amount" />

      <template slot="append">
        <div class="append-text bg-primary">
          <span>.00</span>
        </div>
      </template>
    </vx-input-group>
    <!-- /currency -->

    <!-- Textarea -->
    <vx-input-group>
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Description</span>
        </div>
      </template>

      <vs-textarea v-model="textarea" />
    </vx-input-group>
    <!-- /Textarea -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: '',
      username: '',
      siteUsername: '',
      amount: '',
      textarea: '',
    }
  }
}
</script>
