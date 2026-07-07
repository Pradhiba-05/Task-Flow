import { useEffect, useState } from "react";

import "./App.css";

import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import SearchBar from "./components/SearchBar";
import FilterButtons from "./components/FilterButtons";
import Stats from "./components/Stats";
import TaskList from "./components/TaskList";

import type { Task } from "./types/Task";

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");



  useEffect(() => {

    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }

  }, []);




  useEffect(() => {

    localStorage.setItem("tasks", JSON.stringify(tasks));

  }, [tasks]);



  function addTask(

    title: string,

    description: string,

    priority: "Low" | "Medium" | "High"

  ) {

    const newTask: Task = {

      id: Date.now(),

      title,

      description,

      completed: false,

      createdAt: new Date().toLocaleDateString(),

      priority,

    };

    setTasks([newTask, ...tasks]);

  }




  function toggleTask(id: number) {

    setTasks(

      tasks.map((task) =>

        task.id === id

          ? { ...task, completed: !task.completed }

          : task

      )

    );

  }




  function deleteTask(id: number) {

    setTasks(tasks.filter((task) => task.id !== id));

  }




  const filteredTasks = tasks.filter((task) => {

    const matchesSearch =

      task.title.toLowerCase().includes(search.toLowerCase()) ||

      task.description.toLowerCase().includes(search.toLowerCase());



    const matchesFilter =

      filter === "All"

        ? true

        : filter === "Completed"

        ? task.completed

        : !task.completed;



    return matchesSearch && matchesFilter;

  });

return (
  <>
    <div className="blob blob1"></div>
    <div className="blob blob2"></div>
    <div className="blob blob3"></div>

    <div className="container">
      <Header />

      <Stats tasks={tasks} />

      <TaskInput addTask={addTask} />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <FilterButtons
        filter={filter}
        setFilter={setFilter}
      />

      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  </>
);


 

}

export default App;