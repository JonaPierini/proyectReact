import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneVolume, faEye } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
	    <FontAwesomeIcon icon={faEnvelope} />
     <FontAwesomeIcon icon={faPhoneVolume} />
     <FontAwesomeIcon icon={faEye} />

    </div>
  )
}

export default App
