const UserRepositoryinMemory = require("../repositories/userRepository/UserRepositoryinMemory")
const UserCreateService = require("../services/UserServices/UserCreateService")

describe("UserCreateService", () => {
    let userRepository = null
    let userCreateService = null

    it("user should be created", async () =>{
        const user = {
            name: "user test",
            email: "user@teste.com",
            password: "123"
        }

        userRepository = new UserRepositoryinMemory()
        userCreateService = new UserCreateService(userRepository)

        const userCreated = await userCreateService.execute(user)
        

        expect(userCreated).toHaveProperty("user_id")
        expect(userCreated).toHaveProperty("name", userCreated.name)
        
    })
})