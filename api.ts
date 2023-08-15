import { InterTask } from "./types/task";

const baseURL = 'http://localhost:3001';

export const getAllTasks = async (): Promise<InterTask> => {
    const response = await fetch(`${baseURL}/tasks`);
    const mytasks = await response.json()
    return mytasks;
}