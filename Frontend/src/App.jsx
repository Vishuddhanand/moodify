import React from 'react'
import FaceExpression from './features/Expression/components/FaceExpression'

const App = () => {
  return (
    <div>
      <FaceExpression onClick={(expression) => console.log("Detected expression:", expression)} />
    </div>
  )
}

export default App
