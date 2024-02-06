const Header = (props) => {
  return <h1>{props.course}</h1>;
};


const Content = (props) => {
  return (
    <>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </>
  );
};

const Total = (props) =>{
  return(
    <>
    <p>
    Number of exercises {props.total}
    </p>
    </>
    
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />

    </div>
  )
}

export default App