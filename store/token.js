import {createEvent, createStore} from "effector";

export const setToken = createEvent()
export const logout = createEvent()
const reset = createEvent()

export const token = createStore("")
  .on(setToken, (state, value) => value)
  .on(logout, () => "")
  .reset(reset)



export const setRefreshToken = createEvent()
export const logoutRefreshToken = createEvent()
const resetRefreshToken = createEvent()

export const refreshToken = createStore("")
  .on(setRefreshToken, (state, value) => value)
  .on(logoutRefreshToken, () => "")
  .reset(resetRefreshToken)
