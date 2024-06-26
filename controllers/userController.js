const UserService = require('../services/userService');
const { validateUser, validateUserId } = require('../validators/userValidator');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    validateUserId(userId);
    const user = await UserService.getUserById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createUser = async (req, res) => {
  try {
    const userData = req.body;
    validateUser(userData);
    const user = await UserService.createUser(userData);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const userData = req.body;
    validateUserId(userId);
    validateUser(userData);
    const user = await UserService.updateUser(userId, userData);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.softDeleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    validateUserId(userId);
    const user = await UserService.softDeleteUser(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
