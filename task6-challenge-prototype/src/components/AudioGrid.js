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
              src='https://firebasestorage.googleapis.com/v0/b/audio-challenge-webapp.appspot.com/o/uploads%2Fchallenge21.mp3?alt=media&token=0a562d23-e592-4308-82fe-688d9fb66ee2'
              playing= {state}
              html5={true}
              buffer={true}
              // xhr={{ method: 'GET', headers: ('Access-Control-Allow-Origin', '*')}}
            />
            <button onClick={handlePlay} className="play">PLAY</button>
            <button onClick={handlePause} className="pause">PAUSE</button>
          </div>
      </div>
      ))}
    </div>
  )
}

export default AudioGrid;