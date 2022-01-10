<template>
  <div class="d-flex justify-content-center align-items-center">
      <i class="align-self-center"></i>
      <h2>Not Entry Selected</h2>

      <Fab />
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    }
}
</script>

<style lang="scss" scoped>
    div{
        height: 100%;
    }
</style>