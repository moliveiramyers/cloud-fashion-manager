import db from "../firebase/firebaseConfig.js";

const products = [
    {
        name: "Linen Summer Dress",
        price: 49.99,
        collection: "Summer 2026",
        gender: "women",
        size: "M",
        imageUrl: "https://picsum.photos/600/800?random=1",
        stock: 10,
        discount: 0,
        isActive: true
    },
    {
        name: "Black Oversized Blazer",
        price: 89.99,
        collection: "Essentials",
        gender: "women",
        size: "M",
        imageUrl: "https://picsum.photos/600/800?random=2",
        stock: 8,
        discount: 10,
        isActive: true
    },
    {
        name: "Satin Midi Skirt",
        price: 39.99,
        collection: "Summer 2026",
        gender: "women",
        size: "S",
        imageUrl: "https://picsum.photos/600/800?random=3",
        stock: 12,
        discount: 0,
        isActive: true
    },
    {
        name: "White Cotton Shirt",
        price: 34.99,
        collection: "Essentials",
        gender: "women",
        size: "M",
        imageUrl: "https://picsum.photos/600/800?random=4",
        stock: 15,
        discount: 0,
        isActive: true
    },
    {
        name: "Beige Trench Coat",
        price: 119.99,
        collection: "Autumn 2026",
        gender: "women",
        size: "L",
        imageUrl: "https://picsum.photos/600/800?random=5",
        stock: 5,
        discount: 15,
        isActive: true
    },
    {
        name: "Knit Sweater",
        price: 44.99,
        collection: "Winter 2026",
        gender: "women",
        size: "M",
        imageUrl: "https://picsum.photos/600/800?random=6",
        stock: 11,
        discount: 0,
        isActive: true
    },
    {
        name: "Wide Leg Trousers",
        price: 54.99,
        collection: "Essentials",
        gender: "women",
        size: "M",
        imageUrl: "https://picsum.photos/600/800?random=7",
        stock: 14,
        discount: 0,
        isActive: true
    },
    {
        name: "Denim Jacket",
        price: 69.99,
        collection: "Spring 2026",
        gender: "women",
        size: "M",
        imageUrl: "https://picsum.photos/600/800?random=8",
        stock: 7,
        discount: 5,
        isActive: true
    },
    {
        name: "Floral Maxi Dress",
        price: 64.99,
        collection: "Summer 2026",
        gender: "women",
        size: "S",
        imageUrl: "https://picsum.photos/600/800?random=9",
        stock: 6,
        discount: 0,
        isActive: true
    },
    {
        name: "Ribbed Top",
        price: 24.99,
        collection: "Essentials",
        gender: "women",
        size: "M",
        imageUrl: "https://picsum.photos/600/800?random=10",
        stock: 18,
        discount: 0,
        isActive: true
    },
    {
        name: "Wool Coat",
        price: 139.99,
        collection: "Winter 2026",
        gender: "women",
        size: "L",
        imageUrl: "https://picsum.photos/600/800?random=11",
        stock: 4,
        discount: 20,
        isActive: true
    },
    {
        name: "Leather Jacket",
        price: 149.99,
        collection: "Autumn 2026",
        gender: "women",
        size: "M",
        imageUrl: "https://picsum.photos/600/800?random=12",
        stock: 3,
        discount: 10,
        isActive: true
    },
    {
        name: "Oxford Shirt",
        price: 39.99,
        collection: "Essentials",
        gender: "men",
        size: "M",
        imageUrl: "https://picsum.photos/600/800?random=13",
        stock: 10,
        discount: 0,
        isActive: true
    },
    {
        name: "Slim Fit Chinos",
        price: 49.99,
        collection: "Essentials",
        gender: "men",
        size: "L",
        imageUrl: "https://picsum.photos/600/800?random=14",
        stock: 12,
        discount: 0,
        isActive: true
    },
    {
        name: "Wool Blazer",
        price: 109.99,
        collection: "Winter 2026",
        gender: "men",
        size: "L",
        imageUrl: "https://picsum.photos/600/800?random=15",
        stock: 6,
        discount: 15,
        isActive: true
    },
    {
        name: "Polo Shirt",
        price: 29.99,
        collection: "Summer 2026",
        gender: "men",
        size: "M",
        imageUrl: "https://picsum.photos/600/800?random=16",
        stock: 20,
        discount: 0,
        isActive: true
    },
    {
        name: "Denim Jeans",
        price: 59.99,
        collection: "Essentials",
        gender: "men",
        size: "L",
        imageUrl: "https://picsum.photos/600/800?random=17",
        stock: 15,
        discount: 0,
        isActive: true
    },
    {
        name: "Bomber Jacket",
        price: 89.99,
        collection: "Autumn 2026",
        gender: "men",
        size: "L",
        imageUrl: "https://picsum.photos/600/800?random=18",
        stock: 7,
        discount: 10,
        isActive: true
    },
    {
        name: "Crew Neck Sweater",
        price: 44.99,
        collection: "Winter 2026",
        gender: "men",
        size: "M",
        imageUrl: "https://picsum.photos/600/800?random=19",
        stock: 13,
        discount: 0,
        isActive: true
    },
    {
        name: "Linen Shirt",
        price: 34.99,
        collection: "Summer 2026",
        gender: "men",
        size: "M",
        imageUrl: "https://picsum.photos/600/800?random=20",
        stock: 11,
        discount: 0,
        isActive: true
    },
    {
        name: "Cargo Pants",
        price: 54.99,
        collection: "Spring 2026",
        gender: "men",
        size: "L",
        imageUrl: "https://picsum.photos/600/800?random=21",
        stock: 9,
        discount: 5,
        isActive: true
    },
    {
        name: "Oversized Hoodie",
        price: 49.99,
        collection: "Streetwear",
        gender: "unisex",
        size: "L",
        imageUrl: "https://picsum.photos/600/800?random=22",
        stock: 25,
        discount: 0,
        isActive: true
    },
    {
        name: "Basic White Tee",
        price: 19.99,
        collection: "Basics",
        gender: "unisex",
        size: "M",
        imageUrl: "https://picsum.photos/600/800?random=23",
        stock: 30,
        discount: 0,
        isActive: true
    },
    {
        name: "Relaxed Sweatpants",
        price: 39.99,
        collection: "Streetwear",
        gender: "unisex",
        size: "L",
        imageUrl: "https://picsum.photos/600/800?random=24",
        stock: 16,
        discount: 0,
        isActive: true
    },
    {
        name: "Sport Windbreaker",
        price: 69.99,
        collection: "Active",
        gender: "unisex",
        size: "M",
        imageUrl: "https://picsum.photos/600/800?random=25",
        stock: 8,
        discount: 10,
        isActive: true
    }
];

const seedProducts = async () => {
    try {
        for (const product of products) {
            await db.collection("products").add({
                ...product,
                createdAt: new Date()
            });
        }

        console.log("✅ 25 products created successfully");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedProducts();