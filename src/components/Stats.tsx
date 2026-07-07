import "./Stats.css";
import type { Task } from "../types/Task";

interface Props {
  tasks: Task[];
}

function Stats({ tasks }: Props) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  return (
    <div className="stats">

      <div className="stat-card total-card">
        <div className="stat-icon">📋</div>
        <div>
          <h2>{total}</h2>
          <p>Total Tasks</p>
        </div>
      </div>

      <div className="stat-card completed-card">
        <div className="stat-icon">✅</div>
        <div>
          <h2>{completed}</h2>
          <p>Completed</p>
        </div>
      </div>

      <div className="stat-card pending-card">
        <div className="stat-icon">⏳</div>
        <div>
          <h2>{pending}</h2>
          <p>Pending</p>
        </div>
      </div>

    </div>
  );
}

export default Stats;