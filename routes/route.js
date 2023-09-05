const express = require('express');
const router = express.Router();
const middlewares = require('../middleware/auth.js'); 
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

// User Controllers
const userRegisterController = require('../controllers/userRegisterController.js');
const userLoginController = require('../controllers/userLoginController.js'); 
const getUserDetailsController = require('../controllers/getUserDetailsController.js'); 
const updateUserDetailsController = require('../controllers/updateUserDetailsController.js');

// Product Controllers

const productCreateController = require('../controllers/productCreateController.js');
const getProductDetailsController = require('../controllers/getProductDetailsController.js');
const updateProductController = require('../controllers/updateProductController.js');
const deleteProductDetailsController = require('../controllers/deleteProductDetailsController.js');

//Cart Controllers

const addtoCartController = require('../controllers/addToController.js');
const getCartDetailsController = require('../controllers/getCartDetailsController.js');
const updateCartController = require('../controllers/updateCartController.js');
const deleteCartController = require('../controllers/deleteCartController.js');


//Order Controller
const createOrderController = require('../controllers/createOrderController.js');
const updateOrderContoller = require('../controllers/updateOrderContoller.js');



// Product APIs
//router.post('/register', upload.single('profileImage'), userRegisterController.createUser);
router.post('/register', userRegisterController.createUser);
router.post('/login', userLoginController.login); 
router.get('/user/:userId/profile', middlewares.authentication, getUserDetailsController.getUserDetails); 
router.put('/user/:userId/profile', middlewares.authentication, updateUserDetailsController.updateUserDetails); 

// Products APIs

router.post('/products', productCreateController.createProduct); 
router.get('/products', getProductDetailsController.getProduct); 
//router.get('/products', getProductDetailsController.getProductDetails);
router.get('/products/:productId', getProductDetailsController.getProductDetailsById); 
router.put('/products/:productId', updateProductController.updateProduct); 
router.delete('/product/:productId', deleteProductDetailsController.deleteProduct);

// Cart APIs

router.post('/users/:userId/cart',  middlewares.authentication, addtoCartController.createCart); 
//router.post('/users/:userId/cart', middlewares.authorization, addtoCartController.addToCart); 
router.get('/users/:userId/cart', middlewares.authentication, getCartDetailsController.getCart); 
router.put('/users/:userId/cart', middlewares.authentication, updateCartController.removeProduct); 
router.delete('/users/:userId/cart', middlewares.authentication, deleteCartController.deleteCart); 


//Order APIs
router.post('/users/:userId/orders', middlewares.authentication, createOrderController.orderCreation); 
router.put('/users/:userId/orders', middlewares.authentication, updateOrderContoller.updateOrder); 
module.exports = router;