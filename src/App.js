import './App.css';
import React from 'react';
import logo from "./Icons/logo.svg";
import Navbar from './components/Navbar';
import intro from "./Images/intro.png"
import productive from "./Images/productive.png"

import access from "./Icons/access.svg";
import security from "./Icons/security.svg";
import collab from "./Icons/collab.svg";
import anyfile from "./Icons/anyfile.svg";




import bg from "./Background/bg.svg"

class App extends React.Component {
  render(){

  
  return (
    <div className="App">
      <img src={logo} className="mainlogo" alt="logo" />	
      <Navbar/>
      <img src={intro} className="intro-drawing" alt="drawing of man and woman pulling out files from large folder"/> 
      
      <div className="introtext">
      <h2>All your files in one secure location, <br></br> accessible anywhere.</h2>
          <p>Fylo stores all your most important files in one secure location</p>
          <button>Get started</button>
      </div>


      <div className="grid">

        <div className="one">
        <img src={access} className="access-icon" alt="logo of a phone and computer"/> 

          <h4>Access your files, anywhere</h4>
        <p> The ability to use a smartphone, tablet or computer <br></br> to access your account means your files follow you <br></br> everywhere</p> </div>
       
        <div className="two">
        <img src={security} className="security-icon" alt="icon of a shield with a tick"/> 

          <h4>Security you can trust </h4>
        <p> 2-factor authenticatin and user-controlled encryption are <br></br> just a couple of the security features we allow to help <br></br> secure your files.</p> </div>
       
        <div className="three">
        <img src={collab} className="collab-icon" alt="icon of a clock" /> 

          <h4>Real-time collaboration</h4>
        <p> Securely share files and folders with friends,family and <br></br> colleagues for live collaboration. No email attachments <br></br> required</p> </div>
       
        <div className="four">
        <img src={anyfile} className="anyfile-icon" alt="icon of a file with papers and pencil in front"/> 

          <h4>Store any type of file</h4>
        <p> Whether you're sharing holidays photos or work <br></br> documents, Fylo has you covered allowing for all file<br></br> types to be securely stored and shared</p> </div>
        
      </div>
      <img src={productive} className="productive-drawing" alt="drawing of man and woman pulling out files from large folder"/> 

   
      {/* <img src={bg} className="background" alt="dark swirl background"/>  */}

    </div>
  );
  }
}
export default App;
