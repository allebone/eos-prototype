<template>
  <vs-table :data="changes">
    <template slot="thead">
      <vs-th>Origin</vs-th>
      <vs-th>Before</vs-th>
      <vs-th>After</vs-th>
      <vs-th>Action</vs-th>
      <vs-th>Moved To</vs-th>
    </template>
    <template slot-scope="{data}">
      <vs-tr :key="indextr" v-for="(tr, indextr) in data">
        <vs-td>{{ data[indextr].origin }}</vs-td>
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
          origin: "store - state",
          before: "sidebarItemsMin",
          after: "verticalNavMenuItemsMin",
          action: "updated",
          movedTo: "-"
        },
        {
          origin: "store - state",
          before: "sidebarWidth",
          after: "verticalNavMenuWidth",
          action: "updated",
          movedTo: "-"
        },
        {
          origin: "store - state",
          before: "isSidebarActive",
          after: "isVerticalNavMenuActive",
          action: "updated",
          movedTo: "-"
        },
        {
          origin: "store - action",
          before: "updateSidebarWidth",
          after: "updateVerticalNavMenuWidth",
          action: "updated",
          movedTo: "-"
        },

        {
          origin: "store - mutation",
          before: "TOGGLE_IS_SIDEBAR_ACTIVE",
          after: "TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE",
          action: "updated",
          movedTo: "-"
        },
        {
          origin: "store - mutation",
          before: "TOGGLE_IS_SIDEBAR_ACTIVE",
          after: "TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE",
          action: "updated",
          movedTo: "-"
        },
        {
          origin: "store - mutation",
          before: "UPDATE_SIDEBAR_ITEMS_MIN",
          after: "UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN",
          action: "updated",
          movedTo: "-"
        },
        {
          origin: "store - mutation",
          before: "UPDATE_SIDEBAR_WIDTH",
          after: "UPDATE_VERTICAL_NAV_MENU_WIDTH",
          action: "updated",
          movedTo: "-"
        },
        {
          origin: "store getter",
          before: "-",
          after: "windowBreakPoint",
          action: "added",
          movedTo: "-"
        },
        {
          origin: "Main.vue - computed",
          before: "sidebarWidth",
          after: "verticalNavMenuWidth",
          action: "updated",
          movedTo: "-"
        },
        {
          origin: "Main.vue - method",
          before: "setSidebarWidth",
          after: "setVerticalNavMenuWidth",
          action: "updated",
          movedTo: "-"
        },
        {
          origin: "TheNavbar.vue - method",
          before: "sidebarWidth",
          after: "verticalNavMenuWidth",
          action: "updated",
          movedTo: "-"
        },
        {
          origin: "VxSidebar.vue - prop",
          before: "sidebarItems",
          after: "navMenuItems",
          action: "updated",
          movedTo: "-"
        },
        {
          origin: "VxSidebar.vue - computed",
          before: "isSidebarActive",
          after: "isVerticalNavMenuActive",
          action: "updated",
          movedTo: "-"
        },
        {
          origin: "VxSidebar.vue - computed",
          before: "reduceSidebar",
          after: "isVerticalNavMenuReduced",
          action: "updated",
          movedTo: "-"
        },
        {
          origin: "VxSidebar.vue - computed",
          before: "setSidebarWidth",
          after: "setVerticalNavMenuWidth",
          action: "updated",
          movedTo: "-"
        },
        {
          origin: "VxSidebarGroup.vue - computed",
          before: "sidebarItemsMin",
          after: "verticalNavMenuItemsMin",
          action: "updated",
          movedTo: "-"
        },
      ]
    }
  }
}
</script>
