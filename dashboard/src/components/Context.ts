import React from "react"

export interface HistoryData {
  file: File | null
  img: string | null
  label: string
  score: string | number
}

interface HistoryContext {
  hist: ReadonlyArray<HistoryData>
  setHist: (value: any) => void
}

const History = React.createContext<HistoryContext>({
  hist: [],
  setHist: () => {},
})

export default History
