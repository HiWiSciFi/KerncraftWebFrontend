import { writable, Writable } from 'svelte/store';

export const cachePredictors : Writable<string[]> = writable([]);
export const kernels : Writable<string[]> = writable([]);
export const machines : Writable<string[]> = writable([]);
export const performanceModels : Writable<string[]> = writable([]);
export const units : Writable<string[]> = writable([]);
