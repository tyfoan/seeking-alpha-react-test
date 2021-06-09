// import React from 'react';
// import logo from './logo.svg';
import './App.css';

const MATRIX_SIZE: number = 5;

const [
    rowSize,
    columnSize,
]: number[] = [MATRIX_SIZE, MATRIX_SIZE];

const matrix = Array<number>(rowSize).fill(0).map(()=>Array(columnSize).fill(0));

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {matrix}
      </header>
    </div>
  );
}

export default App;
