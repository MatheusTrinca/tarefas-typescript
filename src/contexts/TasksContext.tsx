import React from 'react';

export interface ITask {
  id: string;
  title: string;
}

export interface ITasksContext {
  tasks: ITask[];
  addNewTask: (task: ITask) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, newTitle: string) => void;
  handleEditMode: (task: ITask) => void;
  editModeTask: ITask | null;
}

interface IProps {
  children: React.ReactElement;
}

const TasksContext = React.createContext<ITasksContext>({} as ITasksContext);

export const TasksProvider: React.FC<IProps> = ({children}) => {
  const [tasks, setTasks] = React.useState<ITask[]>([]);
  const [editModeTask, setEditModeTask] = React.useState<ITask | null>(null);

  const addNewTask = (task: ITask): void => {
    setTasks(prevState => [task, ...prevState]);
  };

  const deleteTask = (id: string) => {
    const deletedTasks = tasks.filter((task: ITask) => task.id !== id);
    setTasks(deletedTasks);
  };

  const editTask = (id: string, newTitle: string) => {
    const editedTasks = tasks.map((task: ITask) => {
      if (task.id === id) {
        task.title = newTitle;
      }
      return task;
    });
    setTasks(editedTasks);
    setEditModeTask(null);
  };

  const handleEditMode = (task: ITask) => {
    setEditModeTask(task);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addNewTask,
        deleteTask,
        editTask,
        editModeTask,
        handleEditMode,
      }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = (): ITasksContext => {
  const context = React.useContext(TasksContext);
  if (!context) {
    throw new Error('useTasksContext deve ser usado em um TasksProvider');
  }
  return context;
};
