import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  //guarda el indice de la anecdota
  const [selected, setSelected] = useState(0)
  //guarda los votos
  const [votes, setVotes] = useState (Array(anecdotes.length).fill(0))
 //console.log(votes);

 
 
let greatest = votes[0]
let greatestIndex = 0

for(let i = 0; i < votes.length ; i++) {
  const vote  = votes[i]
  if(vote > greatest) {
    greatest = vote
    greatestIndex = i 
    }
  }
 console.log(greatest)
 
 
 //se genera un numero aleatorio con el rango de las anecdotas
  const randomNum = (inf, sup) => {
    return Math.floor(Math.random() * (sup - inf + 1)) + inf;
   
  }
    const juanito = () =>{
    //crea una copia de los votos
      const nuevosVotos = [...votes]
      //aumenta un voto a la anecdota seleccionada
      nuevosVotos[selected] = nuevosVotos [selected] +1
      setVotes(nuevosVotos)
    }
   

  const anecdoteGiven = () => {
    //selecciona una anectoda aleatoria para mostrar
    const numeroGenerado = randomNum(0, anecdotes.length - 1);
    setSelected(numeroGenerado);
    console.log('click');
  }
   
 
  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <p>{votes[selected]} votos</p>
      <button onClick={anecdoteGiven}>nex anecdote</button>
      <button onClick={juanito}>vota</button>
      {greatest > 0 && (<p>{anecdotes[greatestIndex]}</p>)}
      </div>
  )
  }
  
export default App 