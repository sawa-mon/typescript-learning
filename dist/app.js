"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("./product.model");
const products = [
    { title: "商品１", price: 100 },
    { title: "商品２", price: 200 },
];
const loadedProducts = products.map((prod) => {
    return new product_model_1.Product(prod.title, prod.price);
});
for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}
