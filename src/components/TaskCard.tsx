import "./TaskCard.css";
import type { Task } from "../types/Task";

interface Props {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

function TaskCard({ task, toggleTask, deleteTask }: Props) {
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>

      <div className="task-header">
        <h2>{task.title}</h2>

        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>

      <p className="description">
        {task.description || "No description provided."}
      </p>

      <p className="date">
        📅 {task.createdAt}
      </p>

      <div className="actions">

        <button
          className="complete-btn"
          onClick={() => toggleTask(task.id)}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;