import './App.css'
import { PruebaAutocomplet } from './components/PruebaAutocomplet'
import { PruebaAvatar } from './components/PruebaAvatar'
import { PruebaButton } from './components/PruebaButton'

function App() {

  return (
    <div className='prueba'>
      <h1>MIU</h1>
      <PruebaButton title = 'Hola'></PruebaButton>
      <PruebaButton title = 'Hola Dos'></PruebaButton>
      {/* <PruebaAutocomplet></PruebaAutocomplet> */}
      {/* <PruebaAvatar></PruebaAvatar> */}
    </div>
  )
}

export default App
