import { InterTask } from "@/types/task";
import React from "react";
import Task from "./Task";

interface TaskListProps {
  tasks: InterTask[]
}

const TaskList: React.FC<TaskListProps> = ({tasks}) => {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Task</th>
        <th>Due Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => (
      <Task key={task.id} task={task}/>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default TaskList