import React from 'react';
import './App.css';
import Palette from './Palette';

import logo from '../img/logo.gif';

const App = () => {

  const palette1 = [
    {r: 255, g: 0, b: 255},
    {r: 0, g: 255, b: 255},
    {r: 255, g: 255, b: 0},
  ];

  // 1. Test adding a second palette Array called `palette2`, modify the `<App />`
  //    return to create a second <Palette /> that uses the values from `palette2`
  // 2. Modify the CSS so that the `grid-template-columns` property of `.app` 
  //    matches the number of pallets you have
  // 3. Create an array called `palettes` that holds the arrays `palette1` and `palette2`
  // 4. `map()` each array to a <Palette />

  return (
    <main id="app" className="app">
      <Palette swatches={ palette1 } />
    </main>
  );
}

export default App;
