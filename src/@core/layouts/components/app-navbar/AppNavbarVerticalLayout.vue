<template>
  <div class="navbar-container d-flex content align-items-center">

    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>

    <b-navbar-nav class="nav align-items-center ml-auto">
      <locale />
      <dark-Toggler class="d-none d-lg-block" />
      <search-bar />
      <notification-dropdown />
      <user-dropdown />
    </b-navbar-nav>
  </div>
</template>

<script>
import {
  BLink, BNavbarNav,
} from 'bootstrap-vue'
import Locale from './components/Locale.vue'
import SearchBar from './components/SearchBar.vue'
import DarkToggler from './components/DarkToggler.vue'
import NotificationDropdown from './components/NotificationDropdown.vue'
import UserDropdown from './components/UserDropdown.vue'

export default {
  components: {
    BLink,

    // Navbar Components
    BNavbarNav,
    Locale,
    SearchBar,
    DarkToggler,
    NotificationDropdown,
    UserDropdown,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
}
</script>
