import { createContext, ReactNode, useContext } from 'react'

type Props = {
  children: ReactNode
}

export const AppContext = createContext('global')

export default function AppProvider({ children }: Props) {
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>
}

export function useGlobalContext() {
  return useContext(AppContext)
}
