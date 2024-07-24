import {defineProps, ref} from "vue";

export const useProductStore = defineProps('productStore', ()=>{
    const products = ref([
        { 'Mac': [] },
        { 'iPhone': [
                {
                    model: 'iPhone 15 Pro Max',
                    OS: 'IOS',
                    screenSize: 6.7,
                    ram: 8,
                    CPU: 'A17 Pro',
                    mainCamera: [48, 12, 12],
                    frontCamera: [12],
                    variations: [
                        {
                            color: {
                                name:'Natural Titanium',
                                value: "#B0B0B0",
                            },
                            storage: 256,
                            basePrice: 1199
                        },
                        {

                        },
                    ]
                }
            ] },
        { 'iPad': [] },
        { 'Apple Watch': [] },
        { 'Apple Vision Pro': [] },
        { 'AirPods': [] },
        { 'AirTag': [] },
        { 'Apple TV 4K': [] },
        { 'HomePod': [] },
        { 'Accessories': [] }
    ])
    return {
        products
    }
})