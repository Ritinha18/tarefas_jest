
const TaskRepositoryinMemory = require("../repositories/taskRepository/TaskRepositoryinMemory")
const UserRepositoryinMemory = require("../repositories/userRepository/UserRepositoryinMemory")

const TaskCreateService = require("../services/TaskServices/TaskCreateService")
const UserCreateService = require("../services/UserServices/UserCreateService")
const TaskDeleteService = require("../services/TaskServices/TaskDeleteService")
const TaskListService = require("../services/TaskServices/TaskListService")

describe("TaskCreateService", () => {
    let taskRepositoryinMemory = null
    let userRepositoryinMemory = null
    let taskCreateService = null
    let userCreateService = null
    let taskDeleteService = null
    let taskListService = null
    
    
    it("task should be created", async () =>{
        taskRepository= new TaskRepositoryinMemory()
        taskCreateService = new TaskCreateService(taskRepository)
        taskDeleteService = new TaskDeleteService(taskRepository)
        taskListService = new TaskListService(taskRepository)

        userRepository = new UserRepositoryinMemory()
        userCreateService = new UserCreateService(userRepository)
        

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
        console.log(taskCreated);

        await taskDeleteService.execute(task)
        console.log(taskCreated);

        const list = await taskListService.execute()
        
        
        
        expect(list).not.toHaveProperty("titulo", "task test" )
        
        
        
    })
})