import React, { useState } from 'react';
import './Swatch.css'
import Channel from './Channel';

const Swatch = ( {red, green, blue} ) => {

  const [r, setR] = useState(red);
  const [g, setG] = useState(green);
  const [b, setB] = useState(blue);


  const styles = {
    backgroundColor: `rgb( ${r}, ${g}, ${b} )`,
  };

  return (
    <li className="swatch" style={ styles }>
      <span>rgb(</span>
      <Channel value={r} changeRgb={setR} />
      <Channel value={g} changeRgb={setG} />
      <Channel value={b} changeRgb={setB} />
      <span>);</span>
    </li>

  );
}

export default Swatch;