<script setup>

import Navbar from "./Navbar.vue";
import TheFooter from "./TheFooter.vue";
</script>

<template>
  <navbar/>
  <main><router-view/>
  </main>
  <the-footer/>
</template>

<style scoped lang="scss">

</style>