const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    
    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();
    });

    it('should to be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Apae1",
                email: "vilelabh@gmail.com",
                whatsapp: "31 9 9954-4441",
                city: "BH",
                uf: "MG"
            });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
    });
});