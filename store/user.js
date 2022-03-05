import {createEvent, createStore} from "effector";

export const setUsername = createEvent()
const reset = createEvent()

export const username = createStore("")
  .on(setUsername, (state, value) => value)
  .reset(reset)
