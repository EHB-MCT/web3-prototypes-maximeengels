import React from 'react';
import useFirestore from '../hooks/useFirestore';

const AudioGrid = ({ setSelectedImg }) => {

  const { docs } = useFirestore('uploads');

  return (
    <div className="uploadGrid">
      {docs && docs.map(doc => (
      <div key={doc.id} className="tile">
        <h3>{doc.id}</h3>
        <p>Made with FL Studio</p>
          <audio controls>
            <source src={doc.url} type="audio/mpeg"/>
          </audio>
      </div>
      ))}
    </div>
  )
}

export default AudioGrid;