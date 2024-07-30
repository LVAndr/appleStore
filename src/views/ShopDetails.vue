<script setup>
import {useProductStore} from "../store/productStore.js";
import {computed, ref} from "vue";
import ProductListItem from "../components/ProductListItem.vue";
import {useRoute} from "vue-router";

const route = useRoute()
const productStore = useProductStore();
const productsList = computed(()=>{
  console.log(route);
  return productStore.productsObj.find(i => i.path === route.params.category);
})
const categoryListProducts = ref(productsList);

</script>

<template>
  <div class="products-container">
    <h1 class="products-title">{{productsList.category}}</h1>
    <div class="products-list">
      <div v-if="productsList.products.length === 0">
        Products not found!
      </div>
      <template v-else>
        <ProductListItem
            :product-title="productsList?.products[0]?.model"
            :product-color="productsList?.products[0]?.variations[0]?.color.name"
            :product-price="productsList?.products[0]?.variations[0]?.basePrice"
        />
      </template>

    </div>
  </div>
</template>

<style scoped lang="scss">
.products-list{
  margin-top: 20px;
}
</style>