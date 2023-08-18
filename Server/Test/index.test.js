const app = require('../src/app');
const session = require('supertest');
const agent = session(app);
const {myFavorites} = require ('../controllers/handleFavorites');


describe("Test de rutas", () => {
    
    describe ('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async() => {
            await agent.get('/rickandmorty/character/1').expect(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await agent.get('/rickandmorty/character/1');
            const character = response.body;
            expect(character).toHaveProperty('id');
            expect(character).toHaveProperty('name');
            expect(character).toHaveProperty('species');
            expect(character).toHaveProperty('gender');
            expect(character).toHaveProperty('status');
            expect(character).toHaveProperty('origin');
            expect(character).toHaveProperty('image')

        });

        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/character/9999').expect(500);

        });
    });

    describe('GET /rickandmorty/login', () => {
        it('Obtiene un objeto con propiedad "access" establecida en true para información de inicio de sesión correcta', async () => {
            const response = await agent
            .get("/rickandmorty/login")
            .query({ email: "gisele@mail.com", password: "gisele321" });
            const loginResult = response.body;
            expect(loginResult).toHaveProperty('access', true);
        });
        it('Obtiene un objeto con propiedad "access" establecida en false para información de inicio de sesión incorrecta', async () => {
            const incorrectEmail = 'mail@mail.com';
            const incorrectPass = '1234';
            const response = await agent.get(`/rickandmorty/login?email=${incorrectEmail}&password=${incorrectPass}`);
            const loginResult = response.body;
            expect(loginResult).toHaveProperty('access', false);
        });

    describe('POST /rickandmorty/fav', () => {
        it('Devuelve la información enviada por body en un arreglo', async() => {
            const reqBody = {id: 1, name: 'Rick'}
            const character = {id: 2, name: 'Morty'}

            const response = await agent.post('/rickandmorty/fav').send(reqBody);
            const responseData = response.body;
            expect(responseData).toEqual([reqBody]); // Busco con el matcher .toContainEqual(reqBody)
        });
        it('Devuelve un arreglo que incluye los elementos enviados previamente', async() => {
            const response = await agent.post('/rickandmorty/fav').send(character);
            const responseData = response.body;
            expect(responseData).toEqual([reqBody])
            expect(responseData).toEqual([character]);
        });
    });

    describe('DELETE /rickandmorty/fav/:id', () => {
        const reqBody = {id: 1, name: 'Rick'}
        const character = {id: 2, name: 'Morty'}

            beforeEach (async () => {
                await agent.post('/rickandmorty/fav').send(reqBody)
                await agent.post('/rickandmorty/fav').send(character)
            })
        it('Devuelve un arreglo sin modificaciones cuando no se encuentra el personaje con el ID', async () => {

            const {body} = await agent.delete('/rickandmorty/fav/1')
            expect (body).toContainEqual(reqBody)
            expect (body).toContainEqual(character)
    });
    it('Devuelve un arreglo sin el personaje eliminado', async () => {
        const {body} = await agent.delete('/rickandmorty/fav/1')
        expect (body).not.toContainEqual(reqBody)
        expect (body).toContainEqual(character)
    });
});
})
})