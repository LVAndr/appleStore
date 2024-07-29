<script setup>
import {useProductStore} from "../store/productStore.js";
import {computed} from "vue";
import ProductListItem from "../components/ProductListItem.vue";
import {useRoute} from "vue-router";

const route = useRoute()
const productStore = useProductStore();
const productsList = computed(()=>{
  console.log(route);
  return productStore.productsObj.find(i => i.path === route.params.category);
})


</script>

<template>
  <div class="products-container">
    <h1 class="products-title">Product name</h1>
    <div class="products-list">
      <pre>
        {{productsList}}
      </pre>
      <ProductListItem :products="productStore.productsObj"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.products-list{
  margin-top: 20px;
}
</style>