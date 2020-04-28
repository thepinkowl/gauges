import { writable } from 'svelte/store';

const DEFAULT_DURATION = 5000; // 5 seconds

function createToaster() {
  const { subscribe, update } = writable([]);

  return {
    subscribe,
    add: (toast) => {
      update(n => {
        return [...n, toast];
      });
    },
    pop: (duration) => {
      setTimeout(() => {
        update(n => {
          const [, ...rest] = n;
          return rest;
        })
      }, duration || DEFAULT_DURATION);
    },
  }
}

export const toaster = createToaster();