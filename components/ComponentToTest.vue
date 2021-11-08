<template>
  <v-btn @click="changeText" class="btn">
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      text: 'text before test',
    };
  },
  methods: {
    changeText() {
      this.text = 'is tested';
    },
  },
};
</script>
