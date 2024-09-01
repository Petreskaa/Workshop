import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ExerciseFirst } from './components/ExerciseFirst';
import { ExerciseSecond } from './components/ExercisSecond';
import { ExerciseThree } from './components/ExerciseThree';
import { ExerciseForth } from './components/ExerciseForth';

function App() {
  return (
    <div className="App">
      <div>Custom Hooks</div>
      {/* <ExerciseFirst /> */}
      {/* <ExerciseSecond /> */}
      {/* <ExerciseThree /> */}
      <ExerciseForth />
    </div>
  );
}

export default App;
