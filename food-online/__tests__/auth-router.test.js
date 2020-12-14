const server = require("../api/server")
const supertest = require("supertest")
const db = require("../data/db")

beforeAll(async () => {
    //await db('users').truncate()
    await db.migrate.latest()
    await db.seed.run()
})

afterAll(async () => {
    //await Promise.resolve().then(console.log);
    //await db.destroy()
})

describe("auth integration tests", () => {
    it("POST /register SHOULD SUCCED", async () => {
        const data = {
            firstname: "testuser",
            lastname: "testuserlast",
            email: "testuser@email.com",
            password: "testpass"
        }
        const res = await supertest(server).post("/auth/register").send(data)
        expect(res.status).toBe(201)
        expect(res.type).toBe("application/json")

    })

    // it("POST /register SHOULD FAIL", async () => {
    //     const data = {
    //         firstname: "testuser",
    //         lastname: "testuserlast",
    //         email: "testuser@email.com",
    //         password: "testpass"
    //     }
    //     const res = await supertest(server).post("/auth/register").send(data)
    //     expect(res.statusCode).toBe(409)
        

    // })
})
