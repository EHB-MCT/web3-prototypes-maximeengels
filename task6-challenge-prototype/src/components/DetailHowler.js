import React from 'react';
import ReactHowler from 'react-howler';
import useFirestore from '../hooks/useFirestore';

const DetailHowler = ({ setSelectedImg }) => {

  const { docs } = useFirestore('uploads');

  return (
    // <div className="uploadGrid">
    //   {docs && docs.map(doc => (
    //   <div key={doc.id} id={doc.id} className="tile">
    //     <h3 className="challengeTitle">{doc.name}</h3>
    //     <p>Made with FL Studio</p>
    //       <audio controls>
    //         <source src={doc.url} type="audio/mpeg"/>
    //       </audio>
    //   </div>
    //   ))}
    // </div>
    <ReactHowler
        src='https://firebasestorage.googleapis.com/v0/b/audio-challenge-webapp.appspot.com/o/uploads%2Fchallenge6.mp3?alt=media&token=21f9f2d8-d2f8-4ed4-86a8-cf3e10621469'
        playing={true}
      />
  )
}

export default DetailHowler;