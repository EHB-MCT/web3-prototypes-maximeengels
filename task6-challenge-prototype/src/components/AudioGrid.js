import React from 'react';

const AudioGrid = () => {
  return (
    <div className="uploadGrid">
      <h4>An Audio Challenge Webapp</h4>
      <p>Made with FL Studio</p>
      <audio controls>
        <source src="https://firebasestorage.googleapis.com/v0/b/audio-challenge-webapp.appspot.com/o/uploads%2Fchallenge13.mp3?alt=media&token=fc1ca8fc-cee7-4e67-afed-e04e7c9754d4" type="audio/mpeg"/>
      </audio>
    </div>
  )
}

export default AudioGrid;