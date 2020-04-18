import { writable } from 'svelte/store';

function createTasks() {
    const { subscribe, update } = writable(JSON.parse(localStorage.getItem('tasks')) || []);

    return {
        subscribe,
        add: (task) => {
            update(n => {
                const result = [...n, task]
                localStorage.setItem('tasks', JSON.stringify(result));
                return result;
            });
        }
    };
}

export const tasks = createTasks();
export const user = writable({});
