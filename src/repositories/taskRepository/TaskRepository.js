const knex = require("../../database/knex")

class TaskRepository {
    async createTask({titulo, descricao, isCompleted}) {
        const  isCompleted = false
        const taskId = await knex("tasks").insert({titulo, descricao, isCompleted})
    return{id: taskId}
    }

    async listTask() {
        const tasks = await knex("tasks")        
        return tasks
    }

    async listTaskById({task_id}) {
        const task = await knex("tasks").where({id: taskId})
        return task
    }

    async updateTask({task_id, titulo}) {
        const task = await knex("tasks").where({id: taskId})

        task.titulo = titulo ?? task.titulo

        await knex("tasks").where({id: taskId}).update({isCompleted: true})

        return task
    } 
    async deleteTask({taskId}) {
        const index = this.tasks.findIndex(task => task.id === taskId)
        return this.tasks.splice(index, 1)
    }

}

module.exports = TaskRepository