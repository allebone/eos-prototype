<template>
  <div class="vx-input-group flex">

    <!-- SLOT: PREPEND -->
    <div class="vx-input-group-prepend flex rounded-tl rounded-bl" :class="prependClasses" v-if="this.$slots.prepend">
      <slot name="prepend"></slot>
    </div>

    <!-- SLOT: DEFAULT -->
    <div class="vx-input-group-default flex-grow">
      <slot></slot>
    </div>

    <!-- SLOT: APPEND -->
    <div class="vx-input-group-append flex rounded-tr rounded-br" :class="appendClasses" v-if="this.$slots.append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vx-input-group',
  props: {
    prependClasses: {
      type: String,
    },
    appendClasses: {
      type: String,
    }
  }
}
</script>

<style lang="scss">

.vx-input-group {

  .vs-con-textarea {
    margin-bottom: 0;
  }

  // prepend style
  .vx-input-group-prepend {
    .prepend-text {
      display: flex;
      align-items: center;

      &:not(:first-child) {
        border-left: 1px solid rgba(0,0,0,0.18);
      }

      // border radius
      &:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;

      }

      &:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      &:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;

      }

      &:last-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      // border radius end

      &.btn-addon {
        .vs-button {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;

          &:not(:first-child) {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-left: none;
          }
        }
      }
    }
  }

  // append style
  .vx-input-group-append {
    .append-text {
      display: flex;
      align-items: center;

      &:not(:first-child) {
        border-left: 1px solid rgba(0,0,0,0.18);
      }

      // border radius
      // &:not(:first-child) {
      //   border-top-right-radius: 0;
      //   border-bottom-right-radius: 0;
      // }

      &:first-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      &:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;

      }

      &:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      // border radius end

      &.btn-addon {
        .vs-button {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;

          &:not(:last-child) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-right: none;

          }
        }
      }
    }
  }

  .prepend-text,
  .append-text {
    &:not(.btn-addon) {
      border-radius: 6px;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    color: #fff;

    &.btn-addon {
      .vs-button {
        height: 100%;
        padding: 0 1.5rem !important;

        // &:first-child {
        //   border-top-right-radius: 0;
        //   border-bottom-right-radius: 0;
        //   padding: 100px;
        // }
      }
    }
  }

  // default slot style
  .vx-input-group-default {
    // remove left radius if not first child
    &:not(:first-child) {
      input,
      .vs-con-textarea {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }

    .vs-input {
      width: 100%;
    }

    // remove right radius if not last child
    &:not(:last-child) {
      input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
}

</style>
