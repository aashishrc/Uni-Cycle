const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/User');
const ProductsController = require('../controllers/Products');
const multer = require('multer');

// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Create User
router.post('/users', async (req, res) => {
  try {
    const user = await UsersController.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get User Details
router.get('/users/:userId', async (req, res) => {
  try {
    const user = await UsersController.getUserById(req.params.userId);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Update User
router.put('/users/:userId', async (req, res) => {
  try {
    const user = await UsersController.updateUserById(req.params.userId, req.body);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Delete User
router.delete('/users/:userId', async (req, res) => {
  try {
    const result = await UsersController.deleteUserById(req.params.userId);
    res.json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Product Endpoints

// Create Product with Image Upload
router.post('/products', upload.array('images', 5), async (req, res) => {
    try {
       console.log('req.body:', req.body);
       console.log('req.files:', req.files);
      // req.files contains an array of uploaded files
      const images = req.files.map(file => ({
        data: file.buffer.toString('base64'),
        contentType: file.mimetype
      }));
  
      const productData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        images: images
      };
  
      const product = await ProductsController.createProduct(productData);
      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not create product' });
    }
  });
  
  // Get Product Details
  router.get('/products/:productId', async (req, res) => {
    try {
      const product = await ProductsController.getProductById(req.params.productId);
      res.json(product);
    } catch (error) {
      res.status(404).json({ error: 'Product not found' });
    }
  });
  
  // Update Product
  router.put('/products/:productId', upload.array('images', 5), async (req, res) => {
    try {
      const images = req.files.map(file => ({
        data: file.buffer.toString('base64'),
        contentType: file.mimetype
      }));
  
      const newData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        images: images
      };
  
      const product = await ProductsController.updateProductById(req.params.productId, newData);
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(404).json({ error: 'Product not found' });
    }
  });
  
  // Delete Product
  router.delete('/products/:productId', async (req, res) => {
    try {
      const result = await ProductsController.deleteProductById(req.params.productId);
      res.json(result);
    } catch (error) {
      res.status(404).json({ error: 'Product not found' });
    }
  });

module.exports = router;
