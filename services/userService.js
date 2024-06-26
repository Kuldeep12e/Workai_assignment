const UserDao = require('../daos/userDao');

exports.getAllUsers = async () => {
  return await UserDao.getAllUsers();
};

exports.getUserById = async (userId) => {
  return await UserDao.getUserById(userId);
};

exports.createUser = async (userData) => {
  return await UserDao.createUser(userData);
};

exports.updateUser = async (userId, userData) => {
  return await UserDao.updateUser(userId, userData);
};

exports.softDeleteUser = async (userId) => {
  return await UserDao.softDeleteUser(userId);
};
