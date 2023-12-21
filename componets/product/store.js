import Product from './Product.model.js';

async function createProduct(product) {
  try {
    const newProduct = new Product(product);
    await newProduct.save();
    return 'Success';
  } catch (error) {
    console.error('Error al crear el producto:', error.message);
    throw error;
  }
}

async function getAllProducts(uid) {
  try {
    const product = await Product.find().select(['_id', 'name', 'description', 'price', 'stock']);
    return product;
  } catch (error) {
    console.error('Error al obtener el producto:', error.message);
    throw error;
  }
}

async function getProductById(uid) {
  try {
    const product = await Product.findById(uid);

    return product;
  } catch (error) {
    console.error('Error al obtener usuario por ID:', error.message);
    throw error;
  }
}

async function updateProduct(product, uid) {
  try {
    const resultUpdate = await Product.findByIdAndUpdate(uid, product, { new: true });

    return resultUpdate;
  } catch (error) {
    console.error('Error al actualizar usuario por ID:', error.message);
    throw error;
  }
}

async function deleteProduct(uid) {
  try {
    const resultDelete = await Product.findByIdAndDelete(uid);

    return resultDelete;
  } catch (error) {
    console.error('Error al eliminar usuario por ID:', error.message);
    throw error;
  }
}

const userStore = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};

export default userStore
