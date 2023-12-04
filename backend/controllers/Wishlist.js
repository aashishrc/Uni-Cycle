const Wishlist = require('../models/mongodb/wishlist');

const createWishlist = async (wishlistData) => {
  try {
    console.log('Creating wishlist with data:', wishlistData);

    const wishlist = new Wishlist(wishlistData);
    await wishlist.save();
    return wishlist;
  } catch (error) {
    console.error(error);
    if (error.name === 'ValidationError') {
      console.log('Validation errors:', error.errors);
    }
    throw new Error('Could not create wishlist');
  }
};

// ... (other CRUD operations similar to the previous example)

module.exports = {
  createWishlist,
  getWishlistById,
  updateWishlist,
  deleteWishlist,
};
