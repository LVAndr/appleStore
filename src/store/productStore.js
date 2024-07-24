import {defineProps, ref} from "vue";

export const useProductStore = defineProps('productStore', ()=>{
    const products = [

    ];
    return {
        products
    }
})