import { writable } from 'svelte/store';

export const guessedLetters = writable([]);
export const word = writable('');
export const lives = writable(8);
export const mistakeCount = writable(0);
export const gameOver = writable(false);
export const win = writable(false);
