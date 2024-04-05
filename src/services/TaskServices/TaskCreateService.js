


class TaskCreateService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository
    }
    async execute({titulo, descricao, isCompleted, user_id}) {
        const taskCreated = await this.taskRepository.createTask({titulo, descricao, isCompleted, user_id})
        return taskCreated
    }
}

module.exports = TaskCreateService