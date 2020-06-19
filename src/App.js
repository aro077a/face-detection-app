import React from 'react';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/image-link-form/ImageLinkForm';
import './App.css';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ParticlesAnimation from './components/particles/ParticlesAnimation';

function App() {
  return (
    <div className='App'>
      <ParticlesAnimation />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
