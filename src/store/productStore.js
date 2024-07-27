import {defineProps, ref} from "vue";

export const useProductStore = defineProps('productStore', ()=>{
    const products = ref([
        { 'Mac': [
                // iMac Models
                {
                    model: 'iMac 24-inch with Apple M1',
                    type: 'Desktop',
                    screenSize: 24,
                    CPU: 'Apple M1',
                    RAM: 8,
                    storage: [256, 512, 1024],
                    connectors: 'USB-C',
                    variations: [
                        {
                            id: 1010,
                            count: 25,
                            color: {
                                name: 'Midnight',
                                value: "#2C2C2C"
                            },
                            storage: 256,
                            basePrice: 1299
                        },
                        {
                            id: 1011,
                            count: 20,
                            color: {
                                name: 'Starlight',
                                value: "#D1C6B6"
                            },
                            storage: 512,
                            basePrice: 1499
                        },
                        {
                            id: 1012,
                            count: 15,
                            color: {
                                name: 'Pink',
                                value: "#E84393"
                            },
                            storage: 1024,
                            basePrice: 1799
                        },
                        {
                            id: 1013,
                            count: 18,
                            color: {
                                name: 'Silver',
                                value: "#BDC3C7"
                            },
                            storage: 256,
                            basePrice: 1299
                        },
                        {
                            id: 1014,
                            count: 12,
                            color: {
                                name: 'Green',
                                value: "#27AE60"
                            },
                            storage: 512,
                            basePrice: 1499
                        }
                    ]
                },
                {
                    model: 'iMac 24-inch with Apple M2',
                    type: 'Desktop',
                    screenSize: 24,
                    CPU: 'Apple M2',
                    RAM: 8,
                    storage: [256, 512, 1024],
                    connectors: 'USB-C',
                    variations: [
                        {
                            id: 1020,
                            count: 30,
                            color: {
                                name: 'Midnight',
                                value: "#2C2C2C"
                            },
                            storage: 256,
                            basePrice: 1399
                        },
                        {
                            id: 1021,
                            count: 25,
                            color: {
                                name: 'Starlight',
                                value: "#D1C6B6"
                            },
                            storage: 512,
                            basePrice: 1599
                        },
                        {
                            id: 1022,
                            count: 20,
                            color: {
                                name: 'Pink',
                                value: "#E84393"
                            },
                            storage: 1024,
                            basePrice: 1899
                        },
                        {
                            id: 1023,
                            count: 22,
                            color: {
                                name: 'Silver',
                                value: "#BDC3C7"
                            },
                            storage: 256,
                            basePrice: 1399
                        },
                        {
                            id: 1024,
                            count: 15,
                            color: {
                                name: 'Green',
                                value: "#27AE60"
                            },
                            storage: 512,
                            basePrice: 1599
                        }
                    ]
                },
                {
                    model: 'iMac 27-inch with Apple M1',
                    type: 'Desktop',
                    screenSize: 27,
                    CPU: 'Apple M1',
                    RAM: 16,
                    storage: [512, 1024, 2048],
                    connectors: 'USB-C',
                    variations: [
                        {
                            id: 1030,
                            count: 10,
                            color: {
                                name: 'Space Gray',
                                value: "#4A4A4A"
                            },
                            storage: 512,
                            basePrice: 1799
                        },
                        {
                            id: 1031,
                            count: 8,
                            color: {
                                name: 'Silver',
                                value: "#C0C0C0"
                            },
                            storage: 1024,
                            basePrice: 2099
                        },
                        {
                            id: 1032,
                            count: 5,
                            color: {
                                name: 'Space Gray',
                                value: "#4A4A4A"
                            },
                            storage: 2048,
                            basePrice: 2599
                        }
                    ]
                },
                {
                    model: 'iMac 27-inch with Apple M2',
                    type: 'Desktop',
                    screenSize: 27,
                    CPU: 'Apple M2',
                    RAM: 16,
                    storage: [512, 1024, 2048],
                    connectors: 'USB-C',
                    variations: [
                        {
                            id: 1040,
                            count: 12,
                            color: {
                                name: 'Space Gray',
                                value: "#4A4A4A"
                            },
                            storage: 512,
                            basePrice: 1899
                        },
                        {
                            id: 1041,
                            count: 10,
                            color: {
                                name: 'Silver',
                                value: "#C0C0C0"
                            },
                            storage: 1024,
                            basePrice: 2199
                        },
                        {
                            id: 1042,
                            count: 8,
                            color: {
                                name: 'Space Gray',
                                value: "#4A4A4A"
                            },
                            storage: 2048,
                            basePrice: 2699
                        }
                    ]
                },
                // MacBook Air Models
                {
                    model: 'MacBook Air with Apple M1',
                    type: 'Laptop',
                    screenSize: 13.3,
                    CPU: 'Apple M1',
                    RAM: 8,
                    storage: [256, 512, 1024],
                    connectors: 'USB-C',
                    variations: [
                        {
                            id: 2010,
                            count: 20,
                            color: {
                                name: 'Space Gray',
                                value: "#4A4A4A"
                            },
                            storage: 256,
                            basePrice: 999
                        },
                        {
                            id: 2011,
                            count: 15,
                            color: {
                                name: 'Gold',
                                value: "#FFD700"
                            },
                            storage: 512,
                            basePrice: 1249
                        },
                        {
                            id: 2012,
                            count: 10,
                            color: {
                                name: 'Silver',
                                value: "#C0C0C0"
                            },
                            storage: 1024,
                            basePrice: 1499
                        }
                    ]
                },
                {
                    model: 'MacBook Air with Apple M2',
                    type: 'Laptop',
                    screenSize: 13.6,
                    CPU: 'Apple M2',
                    RAM: 8,
                    storage: [256, 512, 1024],
                    connectors: 'USB-C',
                    variations: [
                        {
                            id: 2020,
                            count: 30,
                            color: {
                                name: 'Midnight',
                                value: "#2C2C2C"
                            },
                            storage: 256,
                            basePrice: 1099
                        },
                        {
                            id: 2021,
                            count: 25,
                            color: {
                                name: 'Starlight',
                                value: "#D1C6B6"
                            },
                            storage: 512,
                            basePrice: 1349
                        },
                        {
                            id: 2022,
                            count: 20,
                            color: {
                                name: 'Silver',
                                value: "#BDC3C7"
                            },
                            storage: 1024,
                            basePrice: 1599
                        }
                    ]
                },
                // MacBook Pro Models
                {
                    model: 'MacBook Pro 13-inch with Apple M1',
                    type: 'Laptop',
                    screenSize: 13.3,
                    CPU: 'Apple M1',
                    RAM: 8,
                    storage: [256, 512, 1024],
                    connectors: 'USB-C',
                    variations: [
                        {
                            id: 3010,
                            count: 25,
                            color: {
                                name: 'Space Gray',
                                value: "#4A4A4A"
                            },
                            storage: 256,
                            basePrice: 1299
                        },
                        {
                            id: 3011,
                            count: 20,
                            color: {
                                name: 'Silver',
                                value: "#C0C0C0"
                            },
                            storage: 512,
                            basePrice: 1499
                        },
                        {
                            id: 3012,
                            count: 15,
                            color: {
                                name: 'Silver',
                                value: "#C0C0C0"
                            },
                            storage: 1024,
                            basePrice: 1799
                        }
                    ]
                },
                {
                    model: 'MacBook Pro 14-inch with Apple M1 Pro',
                    type: 'Laptop',
                    screenSize: 14.2,
                    CPU: 'Apple M1 Pro',
                    RAM: 16,
                    storage: [512, 1024, 2048],
                    connectors: 'USB-C',
                    variations: [
                        {
                            id: 3020,
                            count: 30,
                            color: {
                                name: 'Space Gray',
                                value: "#4A4A4A"
                            },
                            storage: 512,
                            basePrice: 1999
                        },
                        {
                            id: 3021,
                            count: 25,
                            color: {
                                name: 'Silver',
                                value: "#C0C0C0"
                            },
                            storage: 1024,
                            basePrice: 2299
                        },
                        {
                            id: 3022,
                            count: 20,
                            color: {
                                name: 'Space Gray',
                                value: "#4A4A4A"
                            },
                            storage: 2048,
                            basePrice: 2699
                        }
                    ]
                },
                {
                    model: 'MacBook Pro 16-inch with Apple M1 Max',
                    type: 'Laptop',
                    screenSize: 16,
                    CPU: 'Apple M1 Max',
                    RAM: 32,
                    storage: [1024, 2048, 4096],
                    connectors: 'USB-C',
                    variations: [
                        {
                            id: 3030,
                            count: 10,
                            color: {
                                name: 'Space Gray',
                                value: "#4A4A4A"
                            },
                            storage: 1024,
                            basePrice: 3499
                        },
                        {
                            id: 3031,
                            count: 8,
                            color: {
                                name: 'Silver',
                                value: "#C0C0C0"
                            },
                            storage: 2048,
                            basePrice: 3999
                        },
                        {
                            id: 3032,
                            count: 5,
                            color: {
                                name: 'Space Gray',
                                value: "#4A4A4A"
                            },
                            storage: 4096,
                            basePrice: 4499
                        }
                    ]
                },
                // Mac Mini Models
                {
                    model: 'Mac Mini with Apple M1',
                    type: 'Desktop',
                    CPU: 'Apple M1',
                    RAM: 8,
                    storage: [256, 512, 1024],
                    connectors: 'USB-C',
                    variations: [
                        {
                            id: 4010,
                            count: 40,
                            storage: 256,
                            basePrice: 699
                        },
                        {
                            id: 4011,
                            count: 35,
                            storage: 512,
                            basePrice: 899
                        },
                        {
                            id: 4012,
                            count: 30,
                            storage: 1024,
                            basePrice: 1099
                        }
                    ]
                },
                {
                    model: 'Mac Mini with Apple M2',
                    type: 'Desktop',
                    CPU: 'Apple M2',
                    RAM: 8,
                    storage: [256, 512, 1024],
                    connectors: 'USB-C',
                    variations: [
                        {
                            id: 4020,
                            count: 50,
                            storage: 256,
                            basePrice: 799
                        },
                        {
                            id: 4021,
                            count: 45,
                            storage: 512,
                            basePrice: 999
                        },
                        {
                            id: 4022,
                            count: 40,
                            storage: 1024,
                            basePrice: 1199
                        }
                    ]
                },
                // Mac Pro Models
                {
                    model: 'Mac Pro with Intel Xeon W',
                    type: 'Desktop',
                    CPU: 'Intel Xeon W',
                    RAM: 32,
                    storage: [1024, 2048, 4096],
                    connectors: 'USB-C',
                    variations: [
                        {
                            id: 5010,
                            count: 5,
                            storage: 1024,
                            basePrice: 5999
                        },
                        {
                            id: 5011,
                            count: 3,
                            storage: 2048,
                            basePrice: 7999
                        },
                        {
                            id: 5012,
                            count: 2,
                            storage: 4096,
                            basePrice: 9999
                        }
                    ]
                },
                {
                    model: 'Mac Pro with Apple M1 Ultra',
                    type: 'Desktop',
                    CPU: 'Apple M1 Ultra',
                    RAM: 64,
                    storage: [1024, 2048, 4096],
                    connectors: 'USB-C',
                    variations: [
                        {
                            id: 5020,
                            count: 8,
                            storage: 1024,
                            basePrice: 7999
                        },
                        {
                            id: 5021,
                            count: 6,
                            storage: 2048,
                            basePrice: 9999
                        },
                        {
                            id: 5022,
                            count: 4,
                            storage: 4096,
                            basePrice: 11999
                        }
                    ]
                }
            ] },
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
                    model: 'iPhone 15 Pro',
                    OS: 'IOS',
                    screenSize: 6.1,
                    ram: 8,
                    CPU: 'A17 Pro',
                    mainCamera: [48, 12, 12],
                    frontCamera: [12],
                    connectors: 'type-C',
                    variations: [
                        {
                            id: 2010,
                            count: 14,
                            color: {
                                name: 'Natural Titanium',
                                value: "#B0B0B0"
                            },
                            storage: 256,
                            basePrice: 999
                        },
                        {
                            id: 2011,
                            count: 9,
                            color: {
                                name: 'Natural Titanium',
                                value: "#B0B0B0"
                            },
                            storage: 512,
                            basePrice: 1199
                        },
                        {
                            id: 2012,
                            count: 13,
                            color: {
                                name: 'Natural Titanium',
                                value: "#B0B0B0"
                            },
                            storage: 1024,
                            basePrice: 1399
                        },
                        {
                            id: 2013,
                            count: 11,
                            color: {
                                name: 'Blue Titanium',
                                value: "#4A90E2"
                            },
                            storage: 256,
                            basePrice: 999
                        },
                        {
                            id: 2014,
                            count: 8,
                            color: {
                                name: 'Blue Titanium',
                                value: "#4A90E2"
                            },
                            storage: 512,
                            basePrice: 1199
                        },
                        {
                            id: 2015,
                            count: 16,
                            color: {
                                name: 'Blue Titanium',
                                value: "#4A90E2"
                            },
                            storage: 1024,
                            basePrice: 1399
                        },
                        {
                            id: 2016,
                            count: 10,
                            color: {
                                name: 'Black Titanium',
                                value: "#1C1C1E"
                            },
                            storage: 256,
                            basePrice: 999
                        },
                        {
                            id: 2017,
                            count: 7,
                            color: {
                                name: 'Black Titanium',
                                value: "#1C1C1E"
                            },
                            storage: 512,
                            basePrice: 1199
                        },
                        {
                            id: 2018,
                            count: 19,
                            color: {
                                name: 'Black Titanium',
                                value: "#1C1C1E"
                            },
                            storage: 1024,
                            basePrice: 1399
                        }
                    ]
                },
                {
                    model: 'iPhone 15 Plus',
                    OS: 'IOS',
                    screenSize: 6.7,
                    ram: 6,
                    CPU: 'A16 Bionic',
                    mainCamera: [48, 12],
                    frontCamera: [12],
                    connectors: 'type-C',
                    variations: [
                        {
                            id: 3010,
                            count: 20,
                            color: {
                                name: 'Blue',
                                value: "#007AFF"
                            },
                            storage: 128,
                            basePrice: 899
                        },
                        {
                            id: 3011,
                            count: 15,
                            color: {
                                name: 'Blue',
                                value: "#007AFF"
                            },
                            storage: 256,
                            basePrice: 999
                        },
                        {
                            id: 3012,
                            count: 10,
                            color: {
                                name: 'Blue',
                                value: "#007AFF"
                            },
                            storage: 512,
                            basePrice: 1199
                        },
                        {
                            id: 3013,
                            count: 18,
                            color: {
                                name: 'Pink',
                                value: "#FF2D55"
                            },
                            storage: 128,
                            basePrice: 899
                        },
                        {
                            id: 3014,
                            count: 14,
                            color: {
                                name: 'Pink',
                                value: "#FF2D55"
                            },
                            storage: 256,
                            basePrice: 999
                        },
                        {
                            id: 3015,
                            count: 9,
                            color: {
                                name: 'Pink',
                                value: "#FF2D55"
                            },
                            storage: 512,
                            basePrice: 1199
                        },
                        {
                            id: 3016,
                            count: 12,
                            color: {
                                name: 'Yellow',
                                value: "#FFD60A"
                            },
                            storage: 128,
                            basePrice: 899
                        },
                        {
                            id: 3017,
                            count: 8,
                            color: {
                                name: 'Yellow',
                                value: "#FFD60A"
                            },
                            storage: 256,
                            basePrice: 999
                        },
                        {
                            id: 3018,
                            count: 6,
                            color: {
                                name: 'Yellow',
                                value: "#FFD60A"
                            },
                            storage: 512,
                            basePrice: 1199
                        },
                        {
                            id: 3019,
                            count: 22,
                            color: {
                                name: 'Green',
                                value: "#34C759"
                            },
                            storage: 128,
                            basePrice: 899
                        },
                        {
                            id: 3020,
                            count: 17,
                            color: {
                                name: 'Green',
                                value: "#34C759"
                            },
                            storage: 256,
                            basePrice: 999
                        },
                        {
                            id: 3021,
                            count: 11,
                            color: {
                                name: 'Green',
                                value: "#34C759"
                            },
                            storage: 512,
                            basePrice: 1199
                        }
                    ]
                },
                {
                    model: 'iPhone 15',
                    OS: 'IOS',
                    screenSize: 6.1,
                    ram: 6,
                    CPU: 'A16 Bionic',
                    mainCamera: [48, 12],
                    frontCamera: [12],
                    connectors: 'type-C',
                    variations: [
                        {
                            id: 4010,
                            count: 21,
                            color: {
                                name: 'Blue',
                                value: "#007AFF"
                            },
                            storage: 128,
                            basePrice: 799
                        },
                        {
                            id: 4011,
                            count: 14,
                            color: {
                                name: 'Blue',
                                value: "#007AFF"
                            },
                            storage: 256,
                            basePrice: 899
                        },
                        {
                            id: 4012,
                            count: 9,
                            color: {
                                name: 'Blue',
                                value: "#007AFF"
                            },
                            storage: 512,
                            basePrice: 1099
                        },
                        {
                            id: 4013,
                            count: 16,
                            color: {
                                name: 'Pink',
                                value: "#FF2D55"
                            },
                            storage: 128,
                            basePrice: 799
                        },
                        {
                            id: 4014,
                            count: 13,
                            color: {
                                name: 'Pink',
                                value: "#FF2D55"
                            },
                            storage: 256,
                            basePrice: 899
                        },
                        {
                            id: 4015,
                            count: 8,
                            color: {
                                name: 'Pink',
                                value: "#FF2D55"
                            },
                            storage: 512,
                            basePrice: 1099
                        },
                        {
                            id: 4016,
                            count: 12,
                            color: {
                                name: 'Yellow',
                                value: "#FFD60A"
                            },
                            storage: 128,
                            basePrice: 799
                        },
                        {
                            id: 4017,
                            count: 9,
                            color: {
                                name: 'Yellow',
                                value: "#FFD60A"
                            },
                            storage: 256,
                            basePrice: 899
                        },
                        {
                            id: 4018,
                            count: 7,
                            color: {
                                name: 'Yellow',
                                value: "#FFD60A"
                            },
                            storage: 512,
                            basePrice: 1099
                        },
                        {
                            id: 4019,
                            count: 20,
                            color: {
                                name: 'Green',
                                value: "#34C759"
                            },
                            storage: 128,
                            basePrice: 799
                        },
                        {
                            id: 4020,
                            count: 16,
                            color: {
                                name: 'Green',
                                value: "#34C759"
                            },
                            storage: 256,
                            basePrice: 899
                        },
                        {
                            id: 4021,
                            count: 11,
                            color: {
                                name: 'Green',
                                value: "#34C759"
                            },
                            storage: 512,
                            basePrice: 1099
                        }
                    ]
                },
                {
                    model: 'iPhone 14 Pro Max',
                    OS: 'IOS',
                    screenSize: 6.7,
                    ram: 6,
                    CPU: 'A16 Bionic',
                    mainCamera: [48, 12, 12],
                    frontCamera: [12],
                    connectors: 'Lightning',
                    variations: [
                        {
                            id: 5010,
                            count: 10,
                            color: {
                                name: 'Deep Purple',
                                value: "#5A5A8A"
                            },
                            storage: 128,
                            basePrice: 1099
                        },
                        {
                            id: 5011,
                            count: 7,
                            color: {
                                name: 'Deep Purple',
                                value: "#5A5A8A"
                            },
                            storage: 256,
                            basePrice: 1199
                        },
                        {
                            id: 5012,
                            count: 5,
                            color: {
                                name: 'Deep Purple',
                                value: "#5A5A8A"
                            },
                            storage: 512,
                            basePrice: 1399
                        },
                        {
                            id: 5013,
                            count: 12,
                            color: {
                                name: 'Silver',
                                value: "#C0C0C0"
                            },
                            storage: 128,
                            basePrice: 1099
                        },
                        {
                            id: 5014,
                            count: 9,
                            color: {
                                name: 'Silver',
                                value: "#C0C0C0"
                            },
                            storage: 256,
                            basePrice: 1199
                        },
                        {
                            id: 5015,
                            count: 6,
                            color: {
                                name: 'Silver',
                                value: "#C0C0C0"
                            },
                            storage: 512,
                            basePrice: 1399
                        },
                        {
                            id: 5016,
                            count: 11,
                            color: {
                                name: 'Gold',
                                value: "#FFD700"
                            },
                            storage: 128,
                            basePrice: 1099
                        },
                        {
                            id: 5017,
                            count: 8,
                            color: {
                                name: 'Gold',
                                value: "#FFD700"
                            },
                            storage: 256,
                            basePrice: 1199
                        },
                        {
                            id: 5018,
                            count: 4,
                            color: {
                                name: 'Gold',
                                value: "#FFD700"
                            },
                            storage: 512,
                            basePrice: 1399
                        }
                    ]
                },
                {
                    model: 'iPhone 14 Pro',
                    OS: 'IOS',
                    screenSize: 6.1,
                    ram: 6,
                    CPU: 'A16 Bionic',
                    mainCamera: [48, 12, 12],
                    frontCamera: [12],
                    connectors: 'Lightning',
                    variations: [
                        {
                            id: 6010,
                            count: 18,
                            color: {
                                name: 'Deep Purple',
                                value: "#5A5A8A"
                            },
                            storage: 128,
                            basePrice: 999
                        },
                        {
                            id: 6011,
                            count: 14,
                            color: {
                                name: 'Deep Purple',
                                value: "#5A5A8A"
                            },
                            storage: 256,
                            basePrice: 1099
                        },
                        {
                            id: 6012,
                            count: 10,
                            color: {
                                name: 'Deep Purple',
                                value: "#5A5A8A"
                            },
                            storage: 512,
                            basePrice: 1299
                        },
                        {
                            id: 6013,
                            count: 15,
                            color: {
                                name: 'Silver',
                                value: "#C0C0C0"
                            },
                            storage: 128,
                            basePrice: 999
                        },
                        {
                            id: 6014,
                            count: 11,
                            color: {
                                name: 'Silver',
                                value: "#C0C0C0"
                            },
                            storage: 256,
                            basePrice: 1099
                        },
                        {
                            id: 6015,
                            count: 9,
                            color: {
                                name: 'Silver',
                                value: "#C0C0C0"
                            },
                            storage: 512,
                            basePrice: 1299
                        },
                        {
                            id: 6016,
                            count: 13,
                            color: {
                                name: 'Gold',
                                value: "#FFD700"
                            },
                            storage: 128,
                            basePrice: 999
                        },
                        {
                            id: 6017,
                            count: 8,
                            color: {
                                name: 'Gold',
                                value: "#FFD700"
                            },
                            storage: 256,
                            basePrice: 1099
                        },
                        {
                            id: 6018,
                            count: 6,
                            color: {
                                name: 'Gold',
                                value: "#FFD700"
                            },
                            storage: 512,
                            basePrice: 1299
                        }
                    ]
                },
                {
                    model: 'iPhone 14 Plus',
                    OS: 'IOS',
                    screenSize: 6.7,
                    ram: 6,
                    CPU: 'A15 Bionic',
                    mainCamera: [12, 12],
                    frontCamera: [12],
                    connectors: 'Lightning',
                    variations: [
                        {
                            id: 7010,
                            count: 20,
                            color: {
                                name: 'Blue',
                                value: "#007AFF"
                            },
                            storage: 128,
                            basePrice: 899
                        },
                        {
                            id: 7011,
                            count: 15,
                            color: {
                                name: 'Blue',
                                value: "#007AFF"
                            },
                            storage: 256,
                            basePrice: 999
                        },
                        {
                            id: 7012,
                            count: 10,
                            color: {
                                name: 'Blue',
                                value: "#007AFF"
                            },
                            storage: 512,
                            basePrice: 1199
                        },
                        {
                            id: 7013,
                            count: 18,
                            color: {
                                name: 'Purple',
                                value: "#A20CE8"
                            },
                            storage: 128,
                            basePrice: 899
                        },
                        {
                            id: 7014,
                            count: 14,
                            color: {
                                name: 'Purple',
                                value: "#A20CE8"
                            },
                            storage: 256,
                            basePrice: 999
                        },
                        {
                            id: 7015,
                            count: 9,
                            color: {
                                name: 'Purple',
                                value: "#A20CE8"
                            },
                            storage: 512,
                            basePrice: 1199
                        },
                        {
                            id: 7016,
                            count: 12,
                            color: {
                                name: 'Yellow',
                                value: "#FFD60A"
                            },
                            storage: 128,
                            basePrice: 899
                        },
                        {
                            id: 7017,
                            count: 8,
                            color: {
                                name: 'Yellow',
                                value: "#FFD60A"
                            },
                            storage: 256,
                            basePrice: 999
                        },
                        {
                            id: 7018,
                            count: 6,
                            color: {
                                name: 'Yellow',
                                value: "#FFD60A"
                            },
                            storage: 512,
                            basePrice: 1199
                        }
                    ]
                },
                {
                    model: 'iPhone 14',
                    OS: 'IOS',
                    screenSize: 6.1,
                    ram: 6,
                    CPU: 'A15 Bionic',
                    mainCamera: [12, 12],
                    frontCamera: [12],
                    connectors: 'Lightning',
                    variations: [
                        {
                            id: 8010,
                            count: 20,
                            color: {
                                name: 'Blue',
                                value: "#007AFF"
                            },
                            storage: 128,
                            basePrice: 799
                        },
                        {
                            id: 8011,
                            count: 15,
                            color: {
                                name: 'Blue',
                                value: "#007AFF"
                            },
                            storage: 256,
                            basePrice: 899
                        },
                        {
                            id: 8012,
                            count: 10,
                            color: {
                                name: 'Blue',
                                value: "#007AFF"
                            },
                            storage: 512,
                            basePrice: 1099
                        },
                        {
                            id: 8013,
                            count: 18,
                            color: {
                                name: 'Purple',
                                value: "#A20CE8"
                            },
                            storage: 128,
                            basePrice: 799
                        },
                        {
                            id: 8014,
                            count: 14,
                            color: {
                                name: 'Purple',
                                value: "#A20CE8"
                            },
                            storage: 256,
                            basePrice: 899
                        },
                        {
                            id: 8015,
                            count: 9,
                            color: {
                                name: 'Purple',
                                value: "#A20CE8"
                            },
                            storage: 512,
                            basePrice: 1099
                        },
                        {
                            id: 8016,
                            count: 12,
                            color: {
                                name: 'Yellow',
                                value: "#FFD60A"
                            },
                            storage: 128,
                            basePrice: 799
                        },
                        {
                            id: 8017,
                            count: 8,
                            color: {
                                name: 'Yellow',
                                value: "#FFD60A"
                            },
                            storage: 256,
                            basePrice: 899
                        },
                        {
                            id: 8018,
                            count: 6,
                            color: {
                                name: 'Yellow',
                                value: "#FFD60A"
                            },
                            storage: 512,
                            basePrice: 1099
                        }
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
        { 'Accessories': [
                {
                    type: 'Case',
                    model: 'iPhone 15 Pro Max Case',
                    compatibility: ['iPhone 15 Pro Max'],
                    material: 'Silicone',
                    colors: [
                        { name: 'Black', value: '#1C1C1E' },
                        { name: 'Blue', value: '#4A90E2' },
                        { name: 'Red', value: '#FF3B30' }
                    ],
                    basePrice: 49,
                    variations: [
                        {
                            id: 4010,
                            count: 30,
                            color: { name: 'Black', value: '#1C1C1E' },
                            basePrice: 49
                        },
                        {
                            id: 4011,
                            count: 20,
                            color: { name: 'Blue', value: '#4A90E2' },
                            basePrice: 49
                        },
                        {
                            id: 4012,
                            count: 15,
                            color: { name: 'Red', value: '#FF3B30' },
                            basePrice: 49
                        }
                    ]
                },
                {
                    type: 'Case',
                    model: 'iPhone 15 Pro Case',
                    compatibility: ['iPhone 15 Pro'],
                    material: 'Leather',
                    colors: [
                        { name: 'Brown', value: '#D2691E' },
                        { name: 'Black', value: '#1C1C1E' },
                        { name: 'Green', value: '#34C759' }
                    ],
                    basePrice: 59,
                    variations: [
                        {
                            id: 4020,
                            count: 25,
                            color: { name: 'Brown', value: '#D2691E' },
                            basePrice: 59
                        },
                        {
                            id: 4021,
                            count: 18,
                            color: { name: 'Black', value: '#1C1C1E' },
                            basePrice: 59
                        },
                        {
                            id: 4022,
                            count: 12,
                            color: { name: 'Green', value: '#34C759' },
                            basePrice: 59
                        }
                    ]
                },
                {
                    type: 'Charger',
                    model: 'USB-C Charger 20W',
                    compatibility: ['iPhone', 'iPad', 'MacBook'],
                    power: 20,
                    basePrice: 29,
                    variations: [
                        {
                            id: 4030,
                            count: 50,
                            basePrice: 29
                        }
                    ]
                },
                {
                    type: 'Cable',
                    model: 'USB-C to Lightning Cable',
                    compatibility: ['iPhone', 'iPad'],
                    length: '1m',
                    basePrice: 19,
                    variations: [
                        {
                            id: 4040,
                            count: 60,
                            basePrice: 19
                        }
                    ]
                },
                {
                    type: 'Adapter',
                    model: 'USB-C to USB Adapter',
                    compatibility: ['MacBook'],
                    basePrice: 19,
                    variations: [
                        {
                            id: 4050,
                            count: 40,
                            basePrice: 19
                        }
                    ]
                }
            ]
        }
    ])
    return {
        products
    }
})