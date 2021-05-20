import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {History} from "helpers/history"

type HistoryState = ReadonlyArray<History>

const defaultHistory: HistoryState = []

const historySlice = createSlice({
  name: "history",
  initialState: defaultHistory,
  reducers: {
    addHistory: (state, action: PayloadAction<History>) => {
      state.push(action.payload)
    },
  },
})

export const historyReducer = historySlice.reducer
export const historyActions = historySlice.actions
