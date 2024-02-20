const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Content = ({ parts}) => {
  const numberOfExercises = parts.map((part) => part.exercises)
  console.log(numberOfExercises);
  const sumOfExercises = numberOfExercises.reduce((previous, corrent) => previous + corrent);
  console.log(sumOfExercises, 'suma');
  //console.log(parts, 'content');
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <h3>Total number of exercises {sumOfExercises}</h3>
    </>
      
  ); 
};

const Course = ({ course }) => {
  const{name,parts}=course
  return (
    <>
      <Header text={name} />
      <Content parts={parts}  />
    </>
  );
};

const Part = ({ part }) => {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  );
};

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  
  return (
    <>
    {courses.map((course)=>
    <Course key={course.id} course={course}/>
    )}
    </> 
  );

};

export default App;
// - sustituir componente app
// - Definir componente course
// - Definir componente part
//App
  //Course
    //Header
    //Content
      //Part
      //Part