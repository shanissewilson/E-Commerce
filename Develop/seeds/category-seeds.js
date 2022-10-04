const { Category } = require('../models');

const categoryData = [
  {
    category_type: 'Shirts',
  },
  {
    category_type: 'Shorts',
  },
  {
    category_type: 'Music',
  },
  {
    category_type: 'Hats',
  },
  {
    category_type: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
