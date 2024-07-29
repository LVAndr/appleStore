<script setup>
import { ref, onMounted } from 'vue';
import { useProductStore } from "../store/productStore.js";

const productStore = useProductStore();
const categoriesLinks = ref([]);

const getCategoriesObj = (products) => {
  const links = [];
  for (let i = 0; i < products.length; i++) {
    let categoryLink = {};
    categoryLink.key = products[i].category;
    categoryLink.value = products[i].path;
    links.push(categoryLink);
  }
  return links;
}

onMounted(() => {
  categoriesLinks.value = getCategoriesObj(productStore.productsObj);
});

const activeCategoryLink = ref('');

const setActiveCategoryLink = (category) => {
  activeCategoryLink.value = category;
};
</script>

<template>
<header>
    <router-link class="logo" :to="{name: 'home'}"><img width="20" height="20" src="/src/assets/img/apple.svg" alt=""></router-link>
  <div class="navigation-list">
    <router-link
        class="store-link" :to="{name: 'store'}">Store</router-link>
    <ul class="products-list">
      <li
          class="product-link"
          v-for="categoryLink in categoriesLinks" :key="categoryLink.key">
        <router-link
            class="links"
            :to="{ name: 'shopDetails', params: { category: categoryLink.value } }"
            @click="setActiveCategoryLink(categoryLink.value)"
        >{{categoryLink.key}}</router-link>
      </li>
    </ul>
  </div>
  <ul class="menu-buttons">
    <li class="search-btn"><a href=""><img class="search-btn-img" width="16" height="20" src="/src/assets/img/search.svg" alt="search btn"></a></li>
    <li class="basket-btn"><router-link :to="{name: 'basket'}" href=""><img class="basket-btn-img" width="20" height="20" src="/src/assets/img/basket.svg" alt="basket btn"></router-link></li>
    <li class="menu-btn visible-mobile"><img class="menu-btn-img" width="20" height="20" src="/src/assets/img/menu-icon.svg" alt="menu btn"></li>
  </ul>
</header>
</template>

<style scoped lang="scss">
@import '../assets/styles/main.scss';
header{
  margin: 0 15px;
  font-size: 14px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  .logo{
    display: flex;
    align-items: center;
  }

  .navigation-list{
    display: flex;
    align-items: center;
    .store-link{
      margin-left: 20px;
    }
  }
  .products-list{
    margin-left: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    .product-link{
      color: $globalnav-color;
    }
    .product-link:hover{
      color: $globalnav-color-hover;
    }
  }
  .menu-buttons{
    display: flex;
    margin-left: 20px;
    align-items: center;
    justify-content: center;
    gap: 20px;
    .search-btn-img:hover,.basket-btn-img:hover, .menu-btn-img:hover{
      fill: $globalnav-color-hover;
    }
  }
}
@media (min-width: 893px){
  .visible-mobile{
    display: none;
  }
}
@media (max-width: 893px) {
  .navigation-list{
    display: none;
  }
}
</style>