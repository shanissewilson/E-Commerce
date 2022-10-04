const { Product } = require('../models');

const productData = [
  {
    product_type: 'Plain T-Shirt',
    pricing: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_type: 'Running Sneakers',
    pricing: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_type: 'Branded Baseball Hat',
    pricing: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_type: 'Top 40 Music Compilation Vinyl Record',
    pricing: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_type: 'Cargo Shorts',
    pricing: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
