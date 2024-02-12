import { useState } from 'react';

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const totalComments = good + neutral + bad;
  const  average= totalComments === 0 ? 0 : (good - bad) / totalComments;
  const positivePercentage =
    totalComments === 0 ? 0 : (good / totalComments) * 100;

  return (
    <>
      <h2>Statistics</h2>
      {totalComments > 0 ? (
        <>
          <StatisticLine text="bueno" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="malo" value={bad} />
          <StatisticLine text="Total" value={totalComments} />
          <StatisticLine text="promedio" value={average} />
          <StatisticLine text="Porcentaje positivo" value={positivePercentage} />
        </>
      ) : (
        <>
          <p>No feedback given</p>
        </>
      )}
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <>
      <h1>Give feedback</h1>
      <Button onClick={handleGood} text={'Good'} />
      <Button onClick={handleNeutral} text={'Neutral'} />
      <Button onClick={handleBad} text={'Bad'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;