import React from 'react';
import useFirestore from '../hooks/useFirestore';
import DetailHowler from '../components/DetailHowler';

function AudioGrid() {

  const { docs } = useFirestore('uploads');

  return (
    <div className="uploadGrid">
      {docs && docs.map(doc => (
      <div key={doc.id} id={doc.id} className="tile">
        <h3 className="challengeTitle">{doc.name}</h3>
        <p>Made with FL Studio</p>
          <audio controls>
            <source src={doc.url} type="audio/mpeg"/>
          </audio>
          <DetailHowler url={doc.url} />
      </div>
      ))}
    </div>
  )
}

export default AudioGrid;