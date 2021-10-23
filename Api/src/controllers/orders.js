const Orders = require ('../models/order')

const createOrder = async (req, res) => {
    //creamos el objeto order
    let newOrder = new Orders({
        sellerDocument: req.body.sellerDocument,
        products: req.body.products,
        nameCustome: req.body.nameCustome,
        quantity: req.body.quantity,
        totalPrice: req.body.totalPrice,
        status: req.body.status
    });
    console.log(newOrder)
    try {
        const order = await newOrder.create();
        res.status(200).json({
            message: "Added Succefulyl",   //agregado exitosamente
            order
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't create please try again"
        });
    }
};

const ordersAll = async (req, res) => {
    try {
        const ordersAll = await Orders.find();
        res.status(200).json(ordersAll);
    } catch (error) {
        res.status(400).json({ 
            message: "Cannot get the orders"
        });
    }
};

const orderId = async (req, res) => {
    const {id} = req.params;
    try {
        const orderid = await Orders.findById(id);
        res.status(200).json(orderid);
    } catch (error) {
        res.status(400).json({ 
            message: "Cannot get the orders"
        });
    }
};


module.exports = {
    createOrder,
    ordersAll,
    orderId
}