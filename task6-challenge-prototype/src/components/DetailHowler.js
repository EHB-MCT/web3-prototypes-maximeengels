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
        src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
        playing={true}
      />
  )
}

export default DetailHowler;