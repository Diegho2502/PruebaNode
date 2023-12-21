import product from '../componets/product/network.js';
import api from '../componets/api/externalApi.js';

const routes = function (server) { 
    server.use('/seccion1/product', product);
    server.use('/seccion5/api', api);
}

export default routes;