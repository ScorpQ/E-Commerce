import { createContext } from 'react'

export const ShopContext = createContext()

const Provider = ({ children }) => {
  return <ShopContext.Provider>{children}</ShopContext.Provider>
}
