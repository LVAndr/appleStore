import {defineProps, ref} from "vue";

export const useProductStore = defineProps('productStore', ()=>{
    const products = [
        {
            "id": 1,
            "name": "iPhone 13 Pro",
            "category": "Smartphones",
            "price": 999,
            "specs": {
                "screenSize": "6.1 inches",
                "storageOptions": ["128GB", "256GB", "512GB", "1TB"],
                "camera": "Triple 12MP cameras",
                "processor": "A15 Bionic chip"
            }
        },
        {
            "id": 2,
            "name": "MacBook Pro 14-inch",
            "category": "Laptops",
            "price": 1999,
            "specs": {
                "screenSize": "14.2 inches",
                "storageOptions": ["512GB", "1TB", "2TB", "4TB", "8TB"],
                "ramOptions": ["16GB", "32GB", "64GB"],
                "processor": "Apple M1 Pro or M1 Max"
            }
        },
        {
            "id": 3,
            "name": "iPad Pro",
            "category": "Tablets",
            "price": 799,
            "specs": {
                "screenSize": ["11 inches", "12.9 inches"],
                "storageOptions": ["128GB", "256GB", "512GB", "1TB", "2TB"],
                "camera": "Dual 12MP and 10MP cameras",
                "processor": "Apple M1 chip"
            }
        },
        {
            "id": 4,
            "name": "Apple Watch Series 7",
            "category": "Wearables",
            "price": 399,
            "specs": {
                "screenSize": ["41mm", "45mm"],
                "storageOptions": ["32GB"],
                "processor": "S7 SiP",
                "features": ["Blood Oxygen Sensor", "ECG", "Always-On Retina display"]
            }
        },
        {
            "id": 5,
            "name": "AirPods Pro",
            "category": "Accessories",
            "price": 249,
            "specs": {
                "batteryLife": "4.5 hours of listening time",
                "features": ["Active Noise Cancellation", "Transparency mode", "Adaptive EQ"],
                "compatibility": ["iOS", "iPadOS", "macOS", "watchOS"]
            }
        },
        {
            "id": 6,
            "name": "iMac 24-inch",
            "category": "Desktops",
            "price": 1299,
            "specs": {
                "screenSize": "24 inches",
                "storageOptions": ["256GB", "512GB", "1TB", "2TB"],
                "ramOptions": ["8GB", "16GB"],
                "processor": "Apple M1 chip"
            }
        }
    ];
    return {
        products
    }
})