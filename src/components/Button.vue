<script setup>

</script>

<template>
<button class="btn"><slot>Buy</slot></button>
</template>

<style scoped lang="scss">
@import '../assets/styles/main.scss';
.btn{
  min-width: 100px;
  padding: 10px 16px;
  color: #fff;
  background-color: $blue-color;
  border-radius: 8px;
  transition: background .2s;
}
.btn:hover{
  background-color: $light-blue-color;
}
</style>