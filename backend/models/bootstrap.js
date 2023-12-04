const mongoose = require('mongoose');
require('dotenv/config');

//mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`);

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
  }, { timestamps: true });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  manufacturer: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0, max: 100 },
  owner_user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date_added: { type: Date, default: Date.now },
  date_last_updated: { type: Date, default: Date.now },
  images: [
    {
      file_name: { type: String },
      file_data: { type: Buffer }, // Store binary image data directly
      date_created: { type: Date, default: Date.now },
    },
  ],
});

const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);

module.exports = {
  User,
  Product,
};
