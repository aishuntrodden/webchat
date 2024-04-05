
const { expect } = require('chai');
const request = require('supertest');

const app = require('../server');

describe(' Lambda Handler', () => {
  it('should return a hello message', async () => {
    const response = await request(app).get('/lambda/invokeLambda');
    expect(response.status).to.equal(200);
    expect(response.text).to.equal(JSON.stringify('Hello from Lambda!'));
  });
});