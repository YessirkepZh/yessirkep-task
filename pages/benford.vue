<template>
  <v-layout>
    <v-flex class="text-center">
      <iframe
        :src="url"
        style="width: 100%;height: 300px; border: none;"/>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      url: '../assets/files/task1.pdf',
    };
  },
};
</script>
