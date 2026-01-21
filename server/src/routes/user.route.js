import express from 'express';
import *as user from '../controllers/user.controller.js';
import protect from '../middlewares/auth.middleware.js'

const router=express.Router();

router.post('/signup',user.signup);
router.post('/login', user.userLogin);
router.post('/admin/login',user.adminLogin);


export default router;