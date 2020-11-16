import React from 'react';
import { useState } from 'react';
import ReactHowler from 'react-howler';

function DetailHowler(props) {

  const [isPlaying, setIsPlaying] = useState(false); 

  function handlePlay() {
    setIsPlaying(true);
  }

  function handlePause() {
    setIsPlaying(false);
  }

  return (
    <div className="howler">
      <ReactHowler
        src= {props.url}
        playing= {isPlaying}
        html5= {true}
        buffer= {true}
        // xhr={{ method: 'GET', headers: ('Access-Control-Allow-Origin', '*')}}
      />
      <button onClick={handlePlay} className="play">PLAY</button>
      <button onClick={handlePause} className="pause">PAUSE</button>
    </div>
  )
}

export default DetailHowler;