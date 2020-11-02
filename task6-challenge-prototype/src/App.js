import React from 'react';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import AudioGrid from './components/AudioGrid';
import DetailHowler from './components/DetailHowler';
import './App.css';

function App() {

  return (
    <div className="app">
      <div className="wrapper">
        <Title />
        <UploadForm />
        <AudioGrid />
        <DetailHowler />
        <footer><p>A Framer Motion, React and Howler.js prototype</p></footer>
        {/* <div className="bg"></div> */}
      </div>
    </div>
  );
}

export default App;
