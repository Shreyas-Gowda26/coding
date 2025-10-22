import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <img src="/public/qot.jpeg" alt="/public/qot.jpeg" />
      </div>
      <h1>Name : Queen of thrones</h1>
      <h3>Rating : 8.2</h3>
      <p>
       Summary: Queen of Thrones is a captivating concept that symbolizes power, resilience, and leadership. It represents a woman who rises above challenges, commands respect, and leads with both strength and grace. Whether in a literal or metaphorical sense, the Queen of Thrones embodies determination, intelligence, and influence — someone who doesn’t just wear the crown but earns it through courage, wisdom, and vision. 👑
      </p>
    </div>
  );
}

export default App
