<script setup>
import Button from "./Button.vue";

const props = defineProps({
  productTitle: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productColor: {
    type: String,
    required: true,
  }
})
</script>

<template>
<li class="products-list-item">
  <h2 class="products-list-item-title">{{productTitle}}</h2>
  <img class="products-list-item-img" src="../assets/img/iphone15pro.png" alt="">
  <div class="products-list-item-colors">
    <div class="products-list-item-color">{{productColor}}</div>
  </div>
  <p class="products-list-item-price">{{productPrice}} $</p>
  <Button class="products-list-item-btn"/>
</li>
</template>

<style scoped lang="scss">
.products-list-item{
  max-width: 350px;
  padding: 25px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  box-shadow: 2px 4px 12px rgba(0,0,0,.08);
  border-radius: 18px;
  transition: box-shadow .3s, transform .3s;
}
.products-list-item:hover{
  box-shadow: 2px 4px 16px rgba(0,0,0,.16);
  transform: scale3d(1.01,1.01,1.01);
}
.products-list-item-img{
  user-select: none;
  width: auto;
  height: 200px;
  display: block;
  margin: 0 auto;
}
</style>