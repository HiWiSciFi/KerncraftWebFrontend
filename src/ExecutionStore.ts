import { writable, Writable } from 'svelte/store';

export const cachePredictors : Writable<string[]> = writable(["LC", "SIM"]);
export const selectedCachePredictor : Writable<string> = writable("");

export const kernel : Writable<string> = writable("");
export const kernels : Writable<string[]> = writable(["1bt", "liawjj"]);

export const selectedCores : Writable<number> = writable(1);

export const definedVarNames : Writable<string[]> = writable(["N"]);
export const definedVarValues : Writable<number[]> = writable([1]);

export const machines : Writable<string[]> = writable(["haskell", "skylake"]);
export const selectedMachine : Writable<string> = writable("");

export const performanceModels : Writable<string[]> = writable(["ECM", "Benchmark"]);
export const selectedPerformanceModel : Writable<string> = writable("");
