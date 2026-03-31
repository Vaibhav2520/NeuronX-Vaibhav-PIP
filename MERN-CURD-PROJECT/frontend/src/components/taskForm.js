import { useState } from "react";
import axios from "axios";

function TaskForm({ fetchTasks }) {

  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    await axios.post("http://localhost:5000/api/tasks", {
      title: title
    });

    setTitle("");

    fetchTasks();
  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Task"
      />

      <button>Add Task</button>

    </form>

  );
}

export default TaskForm;