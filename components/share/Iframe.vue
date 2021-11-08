<template>
  <div>
      <div v-if="url !== ''">
        <iframe :src="url" frameborder="0"></iframe>
      </div>
      <div v-else>
          nothing to watch
      </div>
      
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>