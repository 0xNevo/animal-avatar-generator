import { useEffect, useState } from 'react'
import avatar from 'animal-avatar-generator'

function App() {
  const [ svg, setSvg ] = useState( "" );
  const [ name, setName ] = useState( "" );

  useEffect( () => {
    setSvg( avatar( name, { size: 200 } ) );
  }, [ name ] )
  

  return (
    <div style={{"marginLeft": "200px", "padding": "200px", "background": "white"}}>
      <div className="App" dangerouslySetInnerHTML={{__html: svg}} />
      <br/><br/>
      <input type="text" placeholder='Insert name you want.'
        value = {name} onChange = { (e) => setName(e.target.value) }
      />
	  
	  /*{ console.log( 'Peter Hiro') }*/	
    </div>
  )
}

export default App
