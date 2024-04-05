const UserRepositoryinMemory = require("../repositories/userRepository/UserRepositoryinMemory")
const TaskRepositoryinMemory = require("../repositories/taskRepository/TaskRepositoryinMemory")

const UserCreateService = require("../services/UserServices/UserCreateService")
const TaskCreateService = require("../services/TaskServices/TaskCreateService")
const TaskListService = require("../services/TaskServices/TaskListService")
const TaskUpdateService = require("../services/TaskServices/TaskUpdateService")


describe("TaskCreateService", () => {
    let userRepository = null
    let taskRepository = null

    let userCreateService = null
    let taskCreateService = null
    let taskListService = null
    let taskUpdateService = null

    beforeEach(() => {
        userRepository = new UserRepositoryinMemory()
        taskRepository = new TaskRepositoryinMemory()

        userCreateService =new UserCreateService(userRepository)

        taskCreateService = new TaskCreateService(taskRepository)
        taskListService = new TaskListService(taskRepository)
        taskUpdateService = new TaskUpdateService(taskRepository)
    })

    it("user should be update an user", async () =>{
    const user = {
        name: "task test",
        email: "description@test.com",
        password: "011021454"
    }    
    const userCreated = await userCreateService.execute(user);

    const task = {
        titulo: "task test",
        descricao: "description task test",
        user_id: userCreated.user_id
    }
    const taskCreated = await taskCreateService.execute(task);
      
        taskCreated.titulo = "Tarefa atualizada"
        taskCreated.descricao = "Descricao atualizada"

        const taskUpdated = await taskUpdateService.execute(taskCreated)

        expect(taskUpdated).toHaveProperty("titulo", "Tarefa atualizada")     
        
    })
   
    })

