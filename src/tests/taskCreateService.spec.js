
const TaskRepositoryinMemory = require("../repositories/taskRepository/TaskRepositoryinMemory")
const UserRepositoryinMemory = require("../repositories/userRepository/UserRepositoryinMemory")
const TaskCreateService = require("../services/TaskServices/TaskCreateService")
const UserCreateService = require("../services/UserServices/UserCreateService")

describe("TaskCreateService", () => {
    let taskRepositoryinMemory = null
    let userRepositoryinMemory = null
    let taskCreateService = null
    let userCreateService = null
    
    
    it("task should be created", async () =>{
        taskRepositoryinMemory = new TaskRepositoryinMemory()
        taskCreateService = new TaskCreateService(taskRepositoryinMemory)

        userRepositoryinMemory = new UserRepositoryinMemory()
        userCreateService = new UserCreateService(userRepositoryinMemory)

        const user = {
            name: "user test",
            email: "user@teste.com",
            password: "123"
        }

        const userCreated = await userCreateService.execute(user)

        const task = {
            titulo: "task test",
            descricao: "task description on",
            isCompleted: "false",
            user_id: userCreated.user_id
        }
        
        const taskCreated = await taskCreateService.execute(task)
        
        expect(taskCreated).toHaveProperty("taskId")
        expect(taskCreated).toHaveProperty("user_id", userCreated.user_id )
        
        
        
    })
})