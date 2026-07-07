import "./FilterButtons.css";

interface Props {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

function FilterButtons({ filter, setFilter }: Props) {
  return (
    <div className="filters">

      <button
        className={filter === "All" ? "active" : ""}
        onClick={() => setFilter("All")}
      >
        All
      </button>

      <button
        className={filter === "Pending" ? "active" : ""}
        onClick={() => setFilter("Pending")}
      >
        Pending
      </button>

      <button
        className={filter === "Completed" ? "active" : ""}
        onClick={() => setFilter("Completed")}
      >
        Completed
      </button>

    </div>
  );
}

export default FilterButtons;