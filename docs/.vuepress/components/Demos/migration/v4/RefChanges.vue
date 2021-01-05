<template>
  <vs-table :data="changes">
    <template slot="thead">
      <vs-th>Before</vs-th>
      <vs-th>After</vs-th>
      <vs-th>Action</vs-th>
      <vs-th>Moved To</vs-th>
    </template>
    <template slot-scope="{data}">
      <vs-tr :key="indextr" v-for="(tr, indextr) in data">
        <vs-td>{{ data[indextr].before }}</vs-td>
        <vs-td>{{ data[indextr].after }}</vs-td>
        <vs-td>{{ data[indextr].action }}</vs-td>
        <vs-td>{{ data[indextr].movedTo }}</vs-td>
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
          before: "mainSidebar",
          after: "verticalNavMenu",
          File: "VerticalNavMenu.vue",
          action: "updated"
        },
        {
          before: "sidebarLink",
          after: "-",
          File: "VerticalNavMenu.vue",
          action: "removed"
        },
        {
          before: "sidebarGrp",
          after: "-",
          File: "VerticalNavMenu.vue",
          action: "removed"
        },
      ]
    }
  }
}
</script>
