import { useState } from 'react';

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);



  return( 
  <div>
     code here
    <button onClick={() => setGood(0)}>
        good
      </button>
      <button onClick={() => setNeutral(0)}>
        neutral
      </button>
      <button onClick={() => setBad(0)}>
        bad
      </button>
    </div>)
};

export default App;