<template>
  <header :class="{'shadow':true}" class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
    <div class="con-btns-header">
      <router-link @click.native="changeAds" :to="$localePath" class="home-link">
        <div class="con-logo">
          <img class="logo"
          v-if="$site.themeConfig.logo"
          :src="$withBase($site.themeConfig.logo)">
        </div>
        <span class="site-name"
          v-if="$siteTitle"
          :class="{ 'can-hide': $site.themeConfig.logo }">
          <!-- {{ $siteTitle }} -->
        </span>
      </router-link>
      <div :class="{'linksColor':!$page.frontmatter.home}" class="links">
        <!-- <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/> -->
        <!-- <SearchBox v-else-if="$site.themeConfig.search !== false"/> -->
        <NavLinks class="can-hide"/>
      </div>
    </div>

    <div class="con-redes-download">

      <vs-button class="ml-2" target href="https://1.envato.market/vuexy_admin" color="success">Purchase</vs-button>
    	<vs-button type="border" target href="https://pixinvent.ticksy.com/" class="ml-2" color="warning">Support</vs-button>

      <div title="Change Color Primary" v-if="!$page.frontmatter.home" class="con-colors-input">
        <input @change="changeColor($event.target.value)" ref="colorPicker" type="color" name="" :value="color">
        <vs-button type="border" color="primary" icon="colorize" @click="$refs.colorPicker.click()"></vs-button>
      </div>
      <btnApps />
    </div>
    <!-- colors change -->

  </header>
</template>

<script>
import btnApps from './btnApps.vue'
import SidebarButton from './SidebarButton.vue'
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from './SearchBox.vue'
import NavLinks from './NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox, btnApps },
  data(){
    return {
      color: '#008afb',
      shadow:false,
    }
  },
  computed: {
    repoLink () {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
      }
    },
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },
    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },
  mounted(){
    if(this.$page.frontmatter.home){
      window.addEventListener('scroll',(e)=>{
        if(e.target.scrollingElement.scrollTop > 350){
          this.shadow = true
        } else {
          this.shadow = false
        }
      })
    } else {
      this.shadow = true
    }

  },
  methods:{
    changeAds(){
      if (!document.querySelector('#carbonads')) return;
      if (typeof _carbonads !== 'undefined') _carbonads.refresh();
    },
    changeColor(colorx){
      this.$vs.theme({
        primary:colorx // myColorNew
      })
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'
//vuesax
.st0
  fill:#5b5777

.icon-discord
  position relative
  svg
    width 22px
    height 22px
.con-redes-download
  display flex
  align-items center
  justify-content center
  .twitterx
    &:before
      font-size 1.2rem !important
  .repo-link
    &:before
      font-size 1.2rem !important
  a
    display flex !important
    align-items center
    justify-content center
    padding 0px 4px
    transition all .25s ease
    color #5b5777
    &:hover
      color $accentColor !important
      .st0
        fill $accentColor !important
  .btn-download
    padding 12px 10px
    font-size .8rem
    display flex
    align-items center
    justify-content center
    border-left 1px solid rgba(0,0,0,.05)
    border-right 1px solid rgba(0,0,0,.05)
    margin-left 5px
    cursor pointer
    span
      margin-left 5px
.con-inputx-c {
  overflow: hidden;
  display: inline-block;
  position: relative;
  // overflow: hidden;
  border-radius: 0.3rem;
  width: 33px;
  height: 33px;
  box-shadow: 0px 0px
}
.con-colors-input{
  position: relative;
  display flex
  align-items center
  justify-content center
  margin-left 10px
}
.con-colors-input input{
  border: 0px;
  background: transparent;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.shadow {
  // box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.04) !important
    border-bottom: 1px solid #eee;
}
.logo {
  transition: all .3s ease
  // opacity: 0;
  // transform: translate(0,-100%);
}
.visible
  opacity: 1;
  transform: translate(0);
//vuesax

.navbar
  height: 3rem !important;
  padding 2rem 1rem
  // line-height $navbarHeight - 1.5rem
  line-height 1rem
  position relative
  background: $background
  z-index: 1200 !important
  position: fixed;
  width: calc(100% + 7px)
  display flex
  align-items center
  justify-content space-between

  i
    font-size 1rem

  .home-link
    // margin-left 2.5rem
    margin-right 1rem
  .con-btns-header
    display flex
    align-items center
    // justify-content flex-start
  a, span, img
    display block
  .logo
    height 3rem
    // min-width $navbarHeight - 1.4rem
    // margin-right 4.5rem
    vertical-align top
    // margin-left 2.5rem
  .site-name
    font-size 1.3rem
    display none
    font-weight 600
    color $textColor
    position relative
  .links
    font-size 0.9rem
    position relative
    // right 0rem
    top 0rem
    transition: all .2s ease;
    &.linksColor
      // right: 1.5rem
@media (max-width: $MQMobile)
  .links
    line-height 48px
  .navbar
    padding-left 3rem
    .can-hide
      display none
</style>
