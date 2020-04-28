import { writable } from 'svelte/store';

export const router = {
  title: writable(""),
  canGoBack: writable(true),
};