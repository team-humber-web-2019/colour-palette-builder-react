import React from 'react';
import './Channel.css';

const Channel = ( {value, changeRgb} ) => {

  // Take the prop "value", store it locally as a state variable "num"
  //const [rgb, setRgb] = useState(value);
  const rgb = value;

  const updateRgb = (newRgb) => {
    if (newRgb > 255)
      newRgb = 255;
    else if (newRgb < 0 || !newRgb)
      newRgb = 0;

    changeRgb(newRgb);
  }

  console.log(`Render: <Channel />`);
  return (
    <div className="channel">
      <button type="button" className="btn up" onClick={ event => updateRgb( rgb + 10 ) }>+</button>
      <input type="text" className="txt" value={ rgb } onChange={ event => updateRgb( parseInt(event.target.value) ) } />
      <button type="button" className="btn down" onClick={ event => updateRgb( rgb - 10 ) }>-</button>
    </div>
  );
}


export default Channel;