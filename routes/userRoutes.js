const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/worko/user', authMiddleware, userController.getAllUsers);
router.get('/worko/user/:userId', authMiddleware, userController.getUserById);
router.post('/worko/user', authMiddleware, userController.createUser);
router.put('/worko/user/:userId', authMiddleware, userController.updateUser);
router.patch('/worko/user/:userId', authMiddleware, userController.updateUser);
router.delete('/worko/user/:userId', authMiddleware, userController.softDeleteUser);

module.exports = router;
