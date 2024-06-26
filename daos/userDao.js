const User = require('../models/userModel');

exports.getAllUsers = async () => {
  return await User.find({ isDeleted: false });
};

exports.getUserById = async (userId) => {
  return await User.findById(userId).where({ isDeleted: false });
};

exports.createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

exports.updateUser = async (userId, userData) => {
  return await User.findByIdAndUpdate(userId, userData, { new: true }).where({ isDeleted: false });
};

exports.softDeleteUser = async (userId) => {
  return await User.findByIdAndUpdate(userId, { isDeleted: true }, { new: true });
};
