import React, {useState} from 'react'
import Parent from './Parent'
import ValueContext from './ValueContext';
function App() {

let value = useState(23);
  
//let val=75;

  return (
     <ValueContext.Provider value={value}>
      <div>
    Hello World
   <Parent></Parent>
    </div>
    </ValueContext.Provider>

 

  );

}

export default App;
