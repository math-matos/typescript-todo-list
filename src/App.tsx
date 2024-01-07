
import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";
import { TasksProvider } from "./context/TasksContext";

export function App() {
  return (
    <TasksProvider>
      <Header />
      <Tasks />
    </TasksProvider>
  );
}
