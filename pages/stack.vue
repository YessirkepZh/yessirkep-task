<template>
  <v-layout>
    <v-flex class="text-center">
      <pdf src="../assets/files/task1.pdf" />
      <button @click="$refs.myPdfComponent.print()">print</button>
	  <pdf ref="myPdfComponent" src="https://cdn.mozilla.net/pdfjs/tracemonkey.pdf"/>
    </v-flex>
  </v-layout>
</template>

<script>
import pdf from 'vue-pdf';

export default {
  components: {
    pdf,
  },
  data() {
    return {
      url: '../assets/files/task1.pdf',
    };
  },
};

</script>

<style>

</style>
