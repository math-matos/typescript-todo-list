import { useContext } from "react";
import { Cards } from "../StatsCard/Cards";
import styles from "./index.module.scss";
import { TasksContext } from "../../context/TasksContext";

export function Header() {
  const { newTask } = useContext(TasksContext);
  console.log("Header:", newTask);

  const totalTasks = newTask.length;
  const totalPending = newTask.reduce((total, task) => {
    if (!task.done) return total + 1;
    return total;
  }, 0);
  const totalDone = totalTasks - totalPending

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My Todo</h1>

          <span>BEM-VINDO, MATHEUS!</span>
        </div>

        <div>
          <Cards title="Total de Tarefas" value={totalTasks} />
          <Cards title="Tarefas Pendentes" value={totalPending} />
          <Cards title="Tarefas Concluidas" value={totalDone} />
        </div>
      </div>
    </header>
  );
}
