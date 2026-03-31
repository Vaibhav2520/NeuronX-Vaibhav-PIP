import axios from "axios";

function TaskList({ tasks, fetchTasks }) {

  const deleteTask = async (id) => {

    await axios.delete(`http://localhost:5000/api/tasks/${id}`);

    fetchTasks();
  };

  const toggleTask = async (task) => {

    await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
      completed: !task.completed
    });

    fetchTasks();
  };

  return (

    <div>

      {tasks.map((task) => (

        <div key={task._id}>

          <h3
            style={{
              textDecoration: task.completed ? "line-through" : "none"
            }}
          >
            {task.title}
          </h3>

          <button onClick={() => toggleTask(task)}>
            Toggle
          </button>

          <button onClick={() => deleteTask(task._id)}>
            Delete
          </button>

        </div>

      ))}

    </div>

  );
}

export default TaskList;