import { writable } from 'svelte/store';
import { TaskModel } from './models/TaskModel';
import { UserModel } from './models/UserModel';

function createTasks() {

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(t => new TaskModel(t));

    const { subscribe, update } = writable(tasks);

    return {
        subscribe,
        add: (task: TaskModel) => {
            update((n: TaskModel[]) => {
                const ids = n.map(item => item.id);
                ids.sort((a, b) => b - a);
                const biggestId = ids[0] || 0;
                task.id = biggestId + 1;
                const result = [...n, task]
                localStorage.setItem('tasks', JSON.stringify(result));
                return result;
            });
        }
    };
}

function createUser() {
    const defaultUser = { name: 'you' };
    const KEY = 'user';
    let user = JSON.parse(localStorage.getItem(KEY)) || defaultUser;
    user = new UserModel(user);

    const { subscribe, update } = writable(user);

    return {
        subscribe,
        update: (user: UserModel) => {
            update(() => {
                localStorage.setItem(KEY, JSON.stringify(user));
                return user;
            });
        }
    };
}

export const tasks = createTasks();
export const user = createUser();