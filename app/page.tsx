import { getAllTasks } from "@/api";
import AddNewTask from "./components/AddNewTask";
import TaskList from "./components/TaskList";

export default async function Home() {
  const tasks = await getAllTasks();
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">
          My To-Do List
        </h1>
        <AddNewTask/>
      </div>
      <TaskList tasks={tasks}/>
    </main>
  )
}
