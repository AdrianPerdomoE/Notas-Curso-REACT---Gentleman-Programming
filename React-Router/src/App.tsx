import { type ReactNode } from 'react'

import './App.css'

function App({ children }: { children: ReactNode }) {


  return (
    <>
      <p>Navbar</p>
      {children}
      <p>Footer</p>
    </>
  )

}

export default App
