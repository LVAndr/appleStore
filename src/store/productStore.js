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
                    connectors: 'type-C',
                    variations: [
                        {
                            'id': 1010,
                            'count': 12,
                            'color': {
                                'name':'Natural Titanium',
                                'value': "#B0B0B0",
                            },
                            'storage': 256,
                            'basePrice': 1199
                        },
                        {
                            "id": 1011,
                            "count": 8,
                            "color": {
                                "name": "Natural Titanium",
                                "value": "#B0B0B0"
                            },
                            "storage": 512,
                            "basePrice": 1399
                        },
                        {
                            "id": 1012,
                            "count": 15,
                            "color": {
                                "name": "Natural Titanium",
                                "value": "#B0B0B0"
                            },
                            "storage": 1024,
                            "basePrice": 1599
                        },
                        {
                            "id": 1013,
                            "count": 10,
                            "color": {
                                "name": "Blue Titanium",
                                "value": "#4A90E2"
                            },
                            "storage": 256,
                            "basePrice": 1199
                        },
                        {
                            "id": 1014,
                            "count": 7,
                            "color": {
                                "name": "Blue Titanium",
                                "value": "#4A90E2"
                            },
                            "storage": 512,
                            "basePrice": 1399
                        },
                        {
                            "id": 1015,
                            "count": 20,
                            "color": {
                                "name": "Blue Titanium",
                                "value": "#4A90E2"
                            },
                            "storage": 1024,
                            "basePrice": 1599
                        },
                        {
                            "id": 1016,
                            "count": 8,
                            "color": {
                                "name": "Black Titanium",
                                "value": "#1C1C1E"
                            },
                            "storage": 256,
                            "basePrice": 1199
                        },
                        {
                            "id": 1017,
                            "count": 6,
                            "color": {
                                "name": "Black Titanium",
                                "value": "#1C1C1E"
                            },
                            "storage": 512,
                            "basePrice": 1399
                        },
                        {
                            "id": 1018,
                            "count": 18,
                            "color": {
                                "name": "Black Titanium",
                                "value": "#1C1C1E"
                            },
                            "storage": 1024,
                            "basePrice": 1599
                        }
                    ]
                },
                {
                    model: 'Iphone 15 Pro',
                    OS: 'IOS',
                    screenSize: 6.1,
                },
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