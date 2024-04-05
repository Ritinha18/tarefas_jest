
class TaskRepositoryinMemory {
    tasks = []

    async createTask({titulo, descricao, isCompleted, user_id}) {
        const task = {
            taskId: Math.floor(Math.random() * 1000) + 1,
            titulo,
            descricao,
            isCompleted,
            user_id
        }
        this.tasks.push(task)
        return task
    }

    async listTask() { 
        return this.tasks
    }

    async listTaskById({taskId}) {
        const task = this.tasks.find(task => task.id === taskId)
        return task
    }

    async updateTask({taskId, titulo, descricao}) {
        const task = this.listTaskById({taskId})

        task.titulo = titulo ?? task.titulo
        task.descricao = descricao ?? task.descricao

        return task
    } 
    async deleteTask({taskId}) {
        const index = this.tasks.findIndex(task => task.id === taskId)
        return this.tasks.splice(index, 1)
    }

}

module.exports = TaskRepositoryinMemory