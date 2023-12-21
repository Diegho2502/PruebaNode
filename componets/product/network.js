import express from 'express';

import response from '../../network/response.js';
import controller from './Product.controller.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const listProducts = await controller.getAllProducts();  

        response.success(req, res, listProducts, 200);
        
    } catch (error) {
        response.error(req, res, 'Error al listar', 500);
    }
});

router.get('/:uid', async (req, res) => {
    try {

        const { uid } = req.params;

        const Product = await controller.getProductById(uid);

        response.success(req, res, Product, 200);
        
    } catch (error) {
        response.error(req, res, 'Error al listar', 500);
    }
});

router.post("/create", async (req , res) => {
    try {
        const { body } = req;

        const result = await controller.createProduct(body)
        
        if (!!result === false) throw new Error('Error')
         response.success(req, res, result, 201);
        
    } catch (error) {
        response.error(req, res, 'Error informacion invalidad', 400, 'este mensaje es para desarrollador');
    }
});

router.put("/edit/:uid", (req , res) => {
    try {
        const { body, params } = req;
        const { uid } = params;

        controller.updateProduct(body, uid)

        response.success(req, res, 'Succes', 201);
    } catch (error) {
        response.error(req, res, 'Error informacion invalidad', 400, 'este mensaje es para desarrollador');
    }
});

router.delete('/delete/:uid', async function (req, res) {
    try {
        const { uid } = req.params

        const result = await controller.deleteProduct(uid)
        
        if (!!result === false) throw new Error('Error')

        response.success(req, res, 'Succes', 201);

    } catch (error) {
        response.error(req, res, 'Error al eliminar el producto', 400, 'este mensaje es para desarrollador');
    }
});

export default router;