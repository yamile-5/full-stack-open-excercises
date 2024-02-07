import React, { useState } from 'react';

// Componente Button para los botones de comentarios
const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
};

// Componente StatisticLine para mostrar una única estadística
const StatisticLine = ({ text, value }) => {
  return (
    <p>{text}: {value}</p>
  );
};

// Definición del componente Statistics
const Statistics = ({ good, neutral, bad }) => {
  // Calcula el total de comentarios recopilados para cada categoría
  const total = good + neutral + bad;
  // Calcula el promedio de los comentarios
  const average = total === 0 ? 0 : (good - bad) / total;
  // Calcula el porcentaje de comentarios positivos
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <h2>Statistics</h2>
      {/* Renderiza las estadísticas utilizando el componente StatisticLine */}
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total" value={total} />
      <StatisticLine text="Average" value={average.toFixed(2)} />
      <StatisticLine text="Positive feedback" value={`${positivePercentage.toFixed(2)}%`} />
    </div>
  );
};

// Componente raíz App
const App = () => {
  // Estados de la aplicación
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [feedbackReceived, setFeedbackReceived] = useState(false); // Estado para controlar si se han recopilado comentarios

  // Manejadores de eventos para actualizar los estados
  const handleGoodClick = () => {
    setGood(good + 1);
    setFeedbackReceived(true); // Marcar que se han recopilado comentarios
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setFeedbackReceived(true); // Marcar que se han recopilado comentarios
  };
  const handleBadClick = () => {
    setBad(bad + 1);
    setFeedbackReceived(true); // Marcar que se han recopilado comentarios
  };

  // Renderización del componente App
  return (
    <div>
      <h1>Unicafe</h1>
      {/* Utiliza el componente Button para los botones */}
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      {/* Condicionar la renderización del componente Statistics */}
      {feedbackReceived && <Statistics good={good} neutral={neutral} bad={bad} />}
      {!feedbackReceived && <p>No feedback given yet</p>}
    </div>
  );
};
export default App;