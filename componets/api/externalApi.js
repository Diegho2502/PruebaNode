import express from 'express';

import consumeExternalApi from './helper.js';
import response from '../../network/response.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const processedData = await consumeExternalApi();  

        response.success(req, res, processedData, 200);
        
    } catch (error) {
        response.error(req, res, 'Error al listar', 500);
    }
});


export default router;