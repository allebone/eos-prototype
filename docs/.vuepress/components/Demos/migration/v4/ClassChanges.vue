<template>
  <vs-table :data="changes">
    <template slot="thead">
      <vs-th>Before</vs-th>
      <vs-th>After</vs-th>
      <vs-th>Action</vs-th>
    </template>
    <template slot-scope="{data}">
      <vs-tr :key="indextr" v-for="(tr, indextr) in data">
        <vs-td>{{ data[indextr].before }}</vs-td>
        <vs-td>{{ data[indextr].after }}</vs-td>
        <vs-td>{{ data[indextr].action }}</vs-td>
      </vs-tr>
    </template>
  </vs-table>
</template>

<script>
export default {
  data() {
    return {
      changes: [
        {
          before: "sidebar-swipe-area",
          after: "v-nav-menu-swipe-area",
          action: "updated",
        },
        {
          before: "main-menu-sidebar",
          after: "v-nav-menu",
          action: "updated",
        },
        {
          before: "scroll-area--main-sidebar",
          after: "scroll-area-v-nav-menu",
          action: "updated",
        },
        {
          before: "sidebarx",
          after: "-",
          action: "removed",
        },
      ]
    }
  }
}
</script>
