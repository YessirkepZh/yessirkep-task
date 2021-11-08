<template>
  <v-layout
    column justify-center align-center class="wrapper"
  >
    <div v-for="item in response" :key="item.id">
      <span class="span">
        {{item.userId}}
        <span :class="!item.completed ? 'red-c' : 'green-c'">
          {{item.title}}
        </span>
      </span>
    </div>
  </v-layout>
</template>

<script>
import { testRequest } from '@/api/api';

export default {
  components: {},
  data() {
    return {
      response: null,
    };
  },
  async fetch() {
    await testRequest()
      .then((response) => { this.response = response; });
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/mixin.scss";
.wrapper {
  background-color: $default_gray_color;
  .span {
    color: #ffc804;
    .red-c {
      color: #fc5b5b;
    }
    .green-c {
      color: #3bd43b;
    }
  }
}
</style>
