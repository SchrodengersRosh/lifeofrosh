'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

interface ShowContextValue {
  currentCue: string
  setCurrentCue: (cue: string) => void
}

const ShowContext = createContext<ShowContextValue>({
  currentCue: '00',
  setCurrentCue: () => {},
})

export function ShowProvider({ children }: { children: ReactNode }) {
  const [currentCue, setCurrentCue] = useState('00')
  return (
    <ShowContext.Provider value={{ currentCue, setCurrentCue }}>
      {children}
    </ShowContext.Provider>
  )
}

export function useShow() {
  return useContext(ShowContext)
}
