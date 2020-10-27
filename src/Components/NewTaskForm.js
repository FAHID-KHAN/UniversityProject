import React, { useState } from "react";
import { useTasks } from "./TaskManager";

export default function NewTaskForm() {
  const [task, setTask] = useState("");
  const { addTask } = useTasks();

  const submit = e => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={task}
        placeholder="Get some eggs..."
        onChange={e => setTask(e.target.value)}
        required
      />
      <button>Add Task</button>
    </form>
  );
}
