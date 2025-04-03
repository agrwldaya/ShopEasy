// routes/shopRoutes.js
import express from 'express'
import shopController from '../controllers/shopkeeperAuth/shopkeeperController.js';
import upload from '../utils/multerConfig.js';
import { authMiddleware } from '../utils/authMiddleware.js';
const shoprouter = express.Router();

// Register a new shop
shoprouter.post('/register', upload.single('licenseDocument'), shopController.registerShop);
shoprouter.post('/verifyOtp', shopController.verifyOtp);
shoprouter.post('/login', shopController.login);
shoprouter.post('/addProduct',authMiddleware,shopController.addProduct);
shoprouter.get('/profile',authMiddleware,shopController.getProfile);
shoprouter.get('/getAllProducts',authMiddleware,shopController.getAllProducts);

export default shoprouter