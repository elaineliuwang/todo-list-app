import { InterTask } from "@/types/task"

interface TaskProps{
    task: InterTask
}

const Task: React.FC<TaskProps> = ({task}) => {
  return (
    <tr key={task.id}>
        <td>{task.text}</td>
        <td>soon</td>
        <td>idk</td>
    </tr>
  )
}

export default Task