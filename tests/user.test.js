const request = require('supertest');
const mongoose = require('mongoose');
const User = require('../models/userModel');
const app = require('../app');

describe('User API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a user', async () => {
    const res = await request(app)
      .post('/api/worko/user')
      .send({
        email: 'test@example.com',
        name: 'Test User',
        age: 30,
        city: 'Test City',
        zipCode: '12345',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should get all users', async () => {
    const res = await request(app).get('/api/worko/user');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  // Add more tests as needed
});
