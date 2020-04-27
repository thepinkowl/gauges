import { writable } from 'svelte/store';
import { UserModel } from '../models/UserModel';

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

export const user = createUser();
