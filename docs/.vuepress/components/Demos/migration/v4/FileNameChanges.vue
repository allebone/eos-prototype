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
          before: "VxSidebar.vue",
          after: "VerticalNavMenu.vue",
          action: "renamed",
          movedTo: "-"
        },
        {
          before: "VxSidebarGroup.vue",
          after: "VerticalNavMenuGroup.vue",
          action: "renamed",
          movedTo: "-"
        },
        {
          before: "VxSidebarItem.vue",
          after: "VerticalNavMenuItem.vue",
          action: "renamed",
          movedTo: "-"
        },
        {
          before: "vxSidebarGroup.scss",
          after: "verticalNavMenuGroup.scss",
          action: "renamed",
          movedTo: "-"
        },
        {
          before: "_layoutModern.scss",
          after: "_layoutVertical.scss",
          action: "renamed",
          movedTo: "-"
        },
      ]
    }
  }
}
</script>
