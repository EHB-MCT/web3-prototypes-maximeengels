import React from 'react';
import ReactHowler from 'react-howler';
import useFirestore from '../hooks/useFirestore';

const AudioGrid = ({ setSelectedImg }) => {

  const { docs } = useFirestore('uploads');
  let state = false;

  function handlePlay() {
    state = true;
  }

  function handlePause() {
    state = false;
  }

  return (
    <div className="uploadGrid">
      {docs && docs.map(doc => (
      <div key={doc.id} id={doc.id} className="tile">
        <h3 className="challengeTitle">{doc.name}</h3>
        <p>Made with FL Studio</p>
          <audio controls>
            <source src={doc.url} type="audio/mpeg"/>
          </audio>
          <div className="howler">
            <ReactHowler
              src={doc.url}
              playing={true}
            />
            <button onClick={handlePlay()} className="play">PLAY</button>
            <button onClick={handlePause()} className="pause">PAUSE</button>
          </div>
      </div>
      ))}
    </div>
  )
}

export default AudioGrid;