<template>
  <button
    @click="$emit('click')"
    class="sy-button"
    :disabled="disabled"
    :class="[
    'sy-button-'+type,
    'sy-button-'+size
    ]"
  >
    <slot>按钮</slot>
  </button>
</template>
<script>
  export default{
    name: 'SYButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'default'
      }
    },
    data () {
      return {
        msg: 'button'
      }
    }
  }
</script>
