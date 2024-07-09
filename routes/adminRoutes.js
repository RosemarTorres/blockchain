const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const {raiz,index,login,tables,user,loginPost,register} = require('../controllers/adminControllers');

router.get('/',raiz);
router.get('/principal',index);
router.get('/login',login);
router.get('/user',user);
router.get('/register',register);
router.post('/acceso',loginPost);

module.exports = router;