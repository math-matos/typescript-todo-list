import { FormEvent, useContext, useState } from "react";
import styles from "./style.module.scss";
import { TasksContext } from "../../context/TasksContext";

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");

  const { newTask, setNewTask } = useContext(TasksContext);

  function handleSubmitAddTask(e: FormEvent) {
    e.preventDefault();

    if (taskTitle.length < 3) {
      alert("Tarefa muito curta, tente uma maior!");
      return;
    }

    // Nova task
    const setNewTasks = [
      ...newTask,
      { id: new Date().getTime(), title: taskTitle, done: false },
    ];
    setNewTask(setNewTasks);
    localStorage.setItem("tasks", JSON.stringify(setNewTasks));

    setTaskTitle("");
  }

  function handleToggleTaskStatus(taskID: number) {
    const newTasks = newTask.map((task) => {
      if (taskID === task.id) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });

    setNewTask(newTasks);
  }

  // usar filter
  function handleRemoveTask(taskID: number) {
    const removeTasks = newTask.filter(removeTask => removeTask.id !== taskID);
    setNewTask(removeTasks);
  }

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar Tarefa</label>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            type="text"
            id="task-title"
            placeholder="Titulo da Tarefa"
          />
        </div>

        <button type="submit">Adicionar Tarefa</button>
      </form>

      <ul>
        {newTask.map((task) => {
          return (
            <li key={task.id}>
              <input
                type="checkbox"
                id={`task-${task.id}`}
                onChange={() => {
                  handleToggleTaskStatus(task.id);
                }}
              />
              <label
                htmlFor={`task-${task.id}`}
                className={task.done ? styles.done : ""}
              >
                {task.title}
              </label>

              <button onClick={() => {
                handleRemoveTask(task.id)
              }}>REMOVER</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
