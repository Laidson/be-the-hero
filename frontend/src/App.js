//JSX (javaScript XML)
import React from 'react';

import './global.css';

import Routes from './routes';

/**toda vez que meu precisar armazenar uma informação dentro dele
 * criaremos sempre um estado 'const [counter, setCounter] = useState(0);'
 * pq conseguimis atualizar a informção ao mesmo tempo que ela reflete as
 * alterações dentro da interface
 * 
 *   const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
   <div>
      <Header>Contador: {counter}</Header>   
      <button onClick={increment}>Incrementar</button>
    </div>  
*/

function App() {  
  return (
    <Routes />
    );
}

export default App;
