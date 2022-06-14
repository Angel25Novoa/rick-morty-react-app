import React, {useState} from 'react'
import Input from './components/Input'
import Items from './components/Items'

const App = () => {
  const [inputs, setInputs] = useState('')
  return (
    <>
      <Input input={setInputs}/>
      <hr/>
      <ol>
        {inputs.map(item => () => 
        <Items>
          input={item}
          key= {item}
        </Items>)}
      </ol>
    </>
  )
}

export default App
