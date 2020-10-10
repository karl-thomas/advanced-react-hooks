// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'

const countReducer = (previousState, action) => {
  const {type, count, step} = typeof action === 'function' ? action() : action
  switch (type) {
    case 'INCREMENT':
      return {...previousState, count: previousState.count + step}
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [{count}, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
