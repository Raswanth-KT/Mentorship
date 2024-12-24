const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('Matchmaking API', () => {
  let token;

  before(async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'testuser@example.com',
        password: 'password123',
      });

    token = res.body.token;
  });

  describe('GET /api/matchmaking/suggestions', () => {
    it('should get matchmaking suggestions', async () => {
      const res = await request(app)
        .get('/api/matchmaking/suggestions')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
    });
  });
});