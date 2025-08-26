import React, { createContext } from 'react'

const FoodContext = createContext();
const FoodContextProvider = () => {
  return (
    <FoodContext.Provider value={{contextValue}}>
      {props.children}
    </FoodContext.Provider>
  )
}

export default FoodContextProvider;