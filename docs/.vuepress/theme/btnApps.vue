<template>
  <div ref="btnapps" :class="{'active': active}" class="con-btn-apps">
    <button @click="active = !active" title="More Themes" class="btn-apps">
      <i class="material-icons">
        {{ active? 'chevron_left' : 'keyboard_arrow_down' }}
      </i>
    </button>
    <div class="con-ul">
      <ul>
        <li>
          <a title="Modern" target="_blank" href="https://1.envato.market/modern_admin">
            <img :src="$withBase('/apps/modern.png')" alt="Modern">
          </a>
        </li>
        <li>
          <a title="Apex Angular" target="_blank" href="https://1.envato.market/apex_admin">
            <img :src="$withBase('/apps/apex-angular.png')" alt="Apex Angular">
          </a>
        </li>
        <li>
          <a title="Materialize" target="_blank" href="https://1.envato.market/materialize_admin">
            <img :src="$withBase('/apps/materialize.png')" alt="Materialize">
          </a>
        </li>
        <li>
          <a title="Stack" target="_blank" href="https://1.envato.market/stack_admin">
            <img :src="$withBase('/apps/stack.png')" alt="Stack">
          </a>
        </li>
        <li>
          <a title="Robust" target="_blank" href="https://1.envato.market/robust_admin">
            <img :src="$withBase('/apps/robust.png')" alt="Robust">
          </a>
        </li>
        <li>
          <a title="Apex React" target="_blank" href="https://1.envato.market/apex_react_admin">
            <img :src="$withBase('/apps/apex-react.png')" alt="Apex React">
          </a>
        </li>
        <li>
          <a title="Crypto ICO" target="_blank" href="https://1.envato.market/cryptoico_html">
            <img :src="$withBase('/apps/crypto-ico.png')" alt="Crypto ICO">
          </a>
        </li>
        <li>
          <a title="Convex Angular" target="_blank" href="https://1.envato.market/convex_angular_admin">
            <img :src="$withBase('/apps/convex.png')" alt="Convex Angular">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: false
  }),
  watch: {
    active () {
      if (this.active) {
        window.addEventListener('click', this.clickClose)
      } else {
        window.removeEventListener('click', this.clickClose)
      }
    }
  },
  methods: {
    clickClose (evt) {
      if (!evt.target.closest('.con-btn-apps')) {
        this.active = false
      }
      // console.log(sthisbtnapps)
    }
  }
}
</script>
<style lang="stylus">
.con-btn-apps
  position relative
  margin-left 5px

  .btn-apps
    width 36px
    height 36px
    border-radius 5px
    background rgba(255,255,255, 0)
    color #5b5777
    display flex
    align-content center
    justify-content center
    border 0px

    i
      font-size 1.45rem
      transition all .25s ease
  &.active
    .btn-apps
      i
        transform rotate(90deg)
    .con-ul
      opacity 1 !important
      visibility visible !important
      transform translate(0px, 0px) !important

  .con-ul
    width 246px
    height auto
    padding-top 15px
    position absolute
    right 0px
    opacity 0
    visibility hidden
    transform translate(0px, -10px)
    transition all .25s ease

  ul
    width 100%
    background rgb(255,255,255)
    display block
    position relative
    border-radius 5px
    box-shadow 0px 3px 10px 0px rgba(0,0,0,.1)
    display flex
    align-items flex-start
    justify-content flex-start
    padding 3px
    flex-wrap wrap

    &:after
      content ''
      position absolute
      width 8px
      height 8px
      background inherit
      right 15px
      top -4px
      border-left 1px solid rgba(0,0,0,.04)
      border-top 1px solid rgba(0,0,0,.04)
      // background rgb(255,255,255)
      transform rotate(45deg)
    li
      display block
      position relative
      margin 3px
      background #f6f9fc
      border 2px solid #f6f9fc
      box-sizing border-box
      border-radius 14px
      font-size .4rem
      cursor pointer
      transition all .25s ease
      &:hover
        background transparent
      a
        width 50px
        height 50px
        display block
        display flex
        align-items center
        justify-content center
        color rgb(0,0,0)
        img
          width 80%

</style>
