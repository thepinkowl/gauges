import { writable } from 'svelte/store';
import { TaskModel } from '../models/TaskModel';

function createTasks() {

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.map(t => TaskModel.fromRaw(t));

  const { subscribe, update } = writable(tasks);

  return {
    subscribe,
    save: (task: TaskModel) => {
      update((n: TaskModel[]) => {
        const ids = n.map(item => item.id);
        const doesTaskExist = ids.includes(task.id);

        if (!doesTaskExist) { 
          ids.sort((a, b) => b - a);
          const biggestId = ids[0] || 0;
          task.id = biggestId + 1;  
        }

        const result = [...n.filter(t => t.id !== task.id), task]
        localStorage.setItem('tasks', JSON.stringify(result));
        return result;
      });
    },
    deleteById: (taskId: number) => {
      update((n: TaskModel[]) => {
        const result = [...n.filter(t => t.id !== taskId)]
        localStorage.setItem('tasks', JSON.stringify(result));
        return result;
      });
    },
  };
}

export const tasks = createTasks();