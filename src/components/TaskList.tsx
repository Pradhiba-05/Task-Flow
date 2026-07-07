import type { Task } from "../types/Task";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

function TaskList({ tasks, toggleTask, deleteTask }: Props) {

  if (tasks.length === 0) {
    return (
      <h2
        style={{
          color: "#94a3b8",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        No tasks found.
      </h2>
    );
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </>
  );
}

export default TaskList;