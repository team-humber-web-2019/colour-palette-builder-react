import React from 'react';
import './Palette.css';
import Swatch from './Swatch';

const Palette = ( {swatches} ) => {

  // Create one <Swatch> for each props.swatches
  // Iterate through the Array we received using map
  const allSwatches = swatches.map( (col, i) => <Swatch key={i} red={col.r} green={col.g} blue={col.b} /> )

  return (
    <ul className="palette">
      { allSwatches }
    </ul>
  );
}

export default Palette;
