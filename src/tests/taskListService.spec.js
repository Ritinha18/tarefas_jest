const TaskRepositoryinMemory = require("../repositories/taskRepository/TaskRepositoryinMemory")
const UserRepositoryinMemory = require("../repositories/userRepository/UserRepositoryinMemory")
const TaskCreateService = require("../services/TaskServices/TaskCreateService")
const TaskListService = require("../services/TaskServices/TaskListService")
const UserCreateService = require("../services/UserServices/UserCreateService")

describe("TaskListService", () => {
    let taskRepository = null
    let taskCreateService = null
    let taskListService = null
    let userRepository = null
    let userCreateService = null

    it("should be possible list tasks", async () =>{
        const user = {
            name: "user test",
            email: "user@teste.com",
            password: "123"
        }

        userRepository = new UserRepositoryinMemory()
        userCreateService = new UserCreateService(userRepository)
        taskRepository = new TaskRepositoryinMemory()
        taskCreateService = new TaskCreateService(taskRepository)
        taskListService = new TaskListService(taskRepository)

        const userCreated = await userCreateService.execute(user)

        const task1 = {
            titulo: "task test 1",
            descricao: "description test on",
            isCompleted: "false",
            user_id: userCreated.user_id
        }
        const task2 = {
            titulo: "task test 2",
            descricao: "description test on",
            isCompleted: "false",
            user_id: userCreated.user_id
        }

        await taskCreateService.execute(task1)
        await taskCreateService.execute(task2)
        
        const listTask = await taskListService.execute()
        expect(listTask).toEqual(expect.arrayContaining(listTask))   
    })
})