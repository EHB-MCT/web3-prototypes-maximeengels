import React from 'react';
import { useState } from 'react';
import ReactHowler from 'react-howler';

function DetailHowler(props) {

  const [isPlaying, setIsPlaying] = useState(false); 
  const [volume, setVolume] = useState(0.3);

  function handlePlay() {
    setIsPlaying(true);
  }

  function handlePause() {
    setIsPlaying(false);
  }

  function handleChange(event){
    setVolume({value: event.target.value});
    console.log(volume.value);
  }

  return (
    <div className="howler">
      <ReactHowler
        src= {props.url}
        playing= {isPlaying}
        html5= {true}
        buffer= {true}
        volume= {volume.value}
        // xhr={{ method: 'GET', headers: ('Access-Control-Allow-Origin', '*')}}
      />
      <h4>Howler.js audio</h4>
      <div className="buttons">
        <button onClick={handlePlay} className="play">PLAY</button>
        <button onClick={handlePause} className="pause">PAUSE</button>
      </div>
      <div className="slider">
        <div className="align">
          <div className="volText">Volume: {volume.value}</div>
          <input type="range" min="0" max="1" step="0.1" defaultValue={0.3} onChange={handleChange} id="volume" />
        </div>
      </div>
    </div>
  )
}

export default DetailHowler;