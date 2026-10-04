import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Body from './components/Body';
import Browse from './components/Browse';
import Login from './components/Login';


function App() {

  return (
    <div>
      <Login /> 
      <Browse />
      
    </div>
  );
};

export default App;
