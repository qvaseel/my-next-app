import { createEvent, createStore } from "effector";

export const $counter = createStore<number>(3);

export const decrementCounter = createEvent();

export const incrementCounter = createEvent();

export const generateRandomNumber = createEvent();

$counter
.on(incrementCounter, (state) => state + 1)
.on(decrementCounter, (state) => state - 1)
.on(generateRandomNumber, () => Math.floor(Math.random() * 100) + 1);