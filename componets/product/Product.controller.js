import store from './store.js';

async function getAllProducts() {
    try {
        const result = await store.getAllProducts();

        return result;
    } catch (error) {
        console.error('[MessageController] Error al listar los productos', error);
    }
}

async function getProductById(uid) {
    try {
        const result = await store.getProductById(uid);

        return result;
    } catch (error) {
        console.error('[MessageController] Error al listar el producto', error);
    }
}

async function createProduct(product) {
    console.log('🚀 ~ file: Product.controller.js:24 ~ createProduct ~ product:', product)
    try {
        const {name = '', description = '', price, stock} = product;
        console.log('🚀 ~ file: Product.controller.js:27 ~ createProduct ~ {name, description, price, stock}:', {name, description, price, stock})
        const validation = name.length && description.length && price && stock;
        console.log('🚀 ~ file: Product.controller.js:28 ~ createProduct ~ validation:', !!validation)

        if (!!validation) return await store.createProduct(product);

        throw new Error("Algunos datos son requeridos");
    } catch (error) {
        console.error('[MessageController] Error al crear el producto', error);
    }
}

async function updateProduct(product, uid) {
    try {
        if (!uid) throw new Error("El id es requerido");

        const {name = '', description = '', price, stock} = product;
        const validation = name.length && description.length && price && stock;

        if (!!validation === false) throw new Error("Algunos datos son requeridos");
        
        return await store.updateProduct(product, uid);
    } catch (error) {
        console.error('[MessageController] Error al editar el producto', error);
    }
}

async function deleteProduct(uid) {
    try {
        if (!uid) console.error('[MessageController] No hay uid');

        const result = await store.deleteProduct(uid);

        return result;
    } catch (error) {
        console.error('[MessageController] El id del producto es requerido');
    }
}

const userController = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};

export default userController;