import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StyledComponent from './StyledComponent'
import { CustomButton, Parent, UseEffectComponent, UsingCustomHook, Child, ContextComponent, BookReader, FocusInput, ShoppingCart, PhoneBook } from './components'
import { GlobalProvider } from './context'
import { RickAndMorty } from './components/FecthComponent/RickAndMorty'



function App() {
  const [count, setCount] = useState(0)

  const countMore = () => {

    setCount((count) => count + 1);
    throw new Error('This is a test error');

  }

  const alertMessage = () => {
    alert('Hello, this is a custom alert message!');
  }
  const alertMessageFromChild = () => {

    alert('Hello, this is a custom alert message from the child component!');
  }
  return (
    <GlobalProvider>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <CustomButton label={`Count is ${count}`} parentMethod={countMore} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Parent title='Enviar alerta desde el padre' parentMethod={alertMessage} >
        <Child>
          <p>Hola desde el padre</p>
        </Child>
      </Parent>

      <Child>
        <Parent title='Enviar alerta desde el hijo' parentMethod={alertMessageFromChild} >
          <p>Hola desde el hijo</p>
        </Parent>
      </Child>
      <RickAndMorty />
      <ContextComponent />
      <BookReader />
      <FocusInput />
      <StyledComponent />
      <UseEffectComponent />
      <UsingCustomHook />
      <ShoppingCart />
      <PhoneBook />

    </GlobalProvider>

  )
}

export default App
