// controllers/Products.js
const { User } = require('../models/mongodb');
//const Product = require('./Product');

const createProduct = async (productData) => {
    try {
      console.log('Creating product with data:', productData);
  
      const product = new Product(productData);
      await product.save();
      return product;
    } catch (error) {
      console.error(error);
      if (error.name === 'ValidationError') {
        console.log('Validation errors:', error.errors);
      }
      throw new Error('Could not create product');
    }
  };
  

const getProductById = async (productId) => {
  try {
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  } catch (error) {
    throw new Error('Could not get product details');
  }
};

const updateProductById = async (productId, newData) => {
  try {
    const product = await Product.findByIdAndUpdate(productId, newData, { new: true });
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  } catch (error) {
    throw new Error('Could not update product');
  }
};

const deleteProductById = async (productId) => {
  try {
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      throw new Error('Product not found');
    }
    return { message: 'Product deleted successfully' };
  } catch (error) {
    throw new Error('Could not delete product');
  }
};

module.exports = { createProduct, getProductById, updateProductById, deleteProductById };
