<template>
  <div class="f-screen">
    <head>
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">   
    </head>
    <start />
    <!-- <Footer /> -->
    <modal-full-screen />
  </div>
</template>

<script>
import Start from '@/components/base/Start.vue';
import ModalFullScreen from '@/components/share/ModalFullScreen.vue';

// import Footer from '@/components/Footer.vue';
export default {
  components: {
    Start,
    ModalFullScreen
    // Footer
  }
}
</script>
