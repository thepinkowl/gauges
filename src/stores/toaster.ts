import { writable } from 'svelte/store';

const DEFAULT_DURATION = 5000; // 5 seconds

function createToaster() {
  const { subscribe, update } = writable([]);

  let out;
  out = {
    subscribe,
    add: (toast) => {
      update(n => [...n, toast]);
    },
    pop: (toast) => {
      setTimeout(() => out.dismiss(toast), toast.duration || DEFAULT_DURATION);
    },
    dismiss: (toast) => update(n => n.filter(elem => elem !== toast))

  }

  return out;
}

export const toaster = createToaster();