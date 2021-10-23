const { Router } = require('express');
const router = Router();
const orders = require ('../controllers/orders');

//obtener todas las ordenes
router.get('/', orders.ordersAll );

//obtener producto por nombre
//router.get('/:id', orders.getSaleById);

//creo una orden
router.post('/create', orders.createOrder);

//obtener detalle del producto
/*router.get('/:id', orders.getSale);

//actualizar producto
router.put('/:id', orders.updateSale);

//borrar producto
router.delete('/:id', orders.deleteSale);

//crear muchos productos
router.post('/create-many', orders.createManySales);
*/
module.exports = router;
//obtener todas las ordenes de un vendedor
// router.get('/userOrders', async(req, res) =>{
//     try {
        
//     } catch (error) {
        
//     }
// });



//actualizo orden
// router.put('/:id', async(req, res) =>{
//     try {
        
//     } catch (error) {
        
//     }
// });

//actualizo orden
// router.delete('/:id', async(req, res) =>{
//     try {
        
//     } catch (error) {
        
//     }
// });
