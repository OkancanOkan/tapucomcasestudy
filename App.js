import React from 'react'
import TabNavigator from './src/navigations/Tab/TabNavigator'
import  {CartProvider} from "./src/store/CartContext"

const App = () => {
  return (
    <>
    <CartProvider> 
    <TabNavigator></TabNavigator>
     </CartProvider>
     
    </>
  
  )
}

export default App