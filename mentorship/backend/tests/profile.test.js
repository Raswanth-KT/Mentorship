const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('Profile API', () => {
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

  describe('GET /api/profile', () => {
    it('should get the user profile', async () => {
      const res = await request(app)
        .get('/api/profile')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('skills');
      expect(res.body).to.have.property('interests');
    });
  });

  describe('PUT /api/profile', () => {
    it('should update the user profile', async () => {
      const res = await request(app)
        .put('/api/profile')
        .set('Authorization', `Bearer ${token}`)
        .send({
          skills: 'JavaScript, Node.js',
          interests: 'Web Development',
          bio: 'A passionate developer.',
        });

      expect(res.status).to.equal(200);
      expect(res.body.message).to.equal('Profile updated successfully');
    });
  });
});