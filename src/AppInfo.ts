import { writable, Writable } from 'svelte/store';

export const API_HOST : Writable<string> = writable("localhost:8081");
