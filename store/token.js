import {createEvent, createStore} from "effector";

export const setToken = createEvent()
export const logout = createEvent()
const reset = createEvent()

export const token = createStore("")
  .on(setToken, (state, value) => value)
  .on(logout, () => "")
  .reset(reset)
