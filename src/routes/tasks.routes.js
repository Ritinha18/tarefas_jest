const {Router} = require("express")
const TaskController = require("../controllers/TaskController")
const userRoutes = require("./users.routes")

const taskRoutes = Router()
const taskController = new TaskController()

taskRoutes.post("/tasks/:user_id", taskController.createTask )

taskRoutes.get("/tasks", taskController.listTask)

taskRoutes.get("/tasks/:id", taskController.listTaskById)

taskRoutes.put("/tasks/:id", taskController.updateTask)

taskRoutes.patch("/tasks/status/:id", taskController.updateTaskStatus)

taskRoutes.delete("/tasks/:id", taskController.deleteTask)

module.exports = taskRoutes