

class TaskUpdateService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository
    }
    async execute({task_id, titulo, descricao}) {
        const task = await this.taskRepository.updateTask({task_id, titulo, descricao})
        return task
    }
}

module.exports = TaskUpdateService