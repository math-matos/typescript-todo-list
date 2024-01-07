import { createContext, useEffect, useState } from "react";

export interface TasksProps {
  title: string;
  done: boolean;
  id: number;
}

interface TasksContextData {
  newTask: TasksProps[];
  setNewTask: React.Dispatch<React.SetStateAction<TasksProps[]>>;
}

export const TasksContext = createContext({} as TasksContextData);

interface TasksProviderProps {
  children: React.ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [newTask, setNewTask] = useState([] as TasksProps[]);

  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem("tasks");

    if (tasksOnLocalStorage) {
      setNewTask(JSON.parse(tasksOnLocalStorage));
    }
  }, []);

  return (
    <TasksContext.Provider
      value={{
        newTask,
        setNewTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
