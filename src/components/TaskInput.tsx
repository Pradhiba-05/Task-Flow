import "./TaskInput.css";
import { useState } from "react";

interface Props {
  addTask: (
    title: string,
    description: string,
    priority: "Low" | "Medium" | "High"
  ) => void;
}

function TaskInput({ addTask }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<
    "Low" | "Medium" | "High"
  >("Medium");

  const handleSubmit = () => {
    if (!title.trim()) return;

    addTask(title, description, priority);

    setTitle("");
    setDescription("");
    setPriority("Medium");
  };

  return (
    <div className="task-input">

      <input
        placeholder="What would you like to accomplish today?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Add more details about your task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="bottom-row">

        <select
          value={priority}
          onChange={(e) =>
            setPriority(
              e.target.value as "Low" | "Medium" | "High"
            )
          }
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button onClick={handleSubmit}>
          Add Task
        </button>

      </div>

    </div>
  );
}

export default TaskInput;