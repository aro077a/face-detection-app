import React, { useState } from 'react';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/image-link-form/ImageLinkForm';
import './App.css';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ParticlesAnimation from './components/particles/ParticlesAnimation';

const App = () => {
  const [input, setInput] = useState("");

const onInputChange = (e)=>{
  setInput(e.target.value)
console.log(e.target.value)
}

const onButttonSubmit=()=>{

}

  return (
    <div className='App'>
      <ParticlesAnimation />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onSubmit={onButttonSubmit}/>
      {/* <FaceRecognition /> */}
    </div>
  );
};

export default App;
