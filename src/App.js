import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import intro from "./Images/intro.png"
import quotes from "./Icons/quotes.png"

import productive from "./Images/productive.png"

import access from "./Icons/access.svg";
import arrow from "./Icons/arrow.svg";

import security from "./Icons/security.svg";
import collab from "./Icons/collab.svg";
import anyfile from "./Icons/anyfile.svg";
import location from "./Icons/location.svg";
import logo from "./Icons/logo.svg";



import p1 from "./Images/p1.jpg"
import p2 from "./Images/p2.jpg"
import p3 from "./Images/p3.jpg"



// import bg from "./Background/bg.svg"

class App extends React.Component {
  render(){

  
  return (
    <div className="App">
      <Navbar/>
      <img src={intro} className="intro-drawing" alt="drawing of man and woman pulling out files from large folder"/> 
      
      <div className="introtext">
      <h2 className="htwointro">All your files in one secure location, <br></br> accessible anywhere.</h2>
          <p className="pintro">Fylo stores all your most important files in one secure location.<br></br> Access them wherever you need, share and collaborate with <br></br> friends family, and co-workers.</p>
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
      <div className="prod"> 
      <img src={productive} className="productive-drawing" alt="drawing of man and woman pulling out files from large folder"/>  
      <div className="prodpara">
        <h2>Stay productive, <br></br> wherever you are</h2>
        <p className="para1">Never let location be an issue when accessing your files. Fylo has you <br></br>covered for all of your file storage needs.</p>
        <p className="para2">Securly share files and folders with friends, family and colleagues for live <br></br> collaboration. No email attachments required.</p>
        <a className="prodlink"href="www.google.com" target="blank">See how Fylo works <img src={arrow} className="arrow-icon" alt="logo of a phone and computer"/></a>

       </div>
   </div>

    <div className="opinions">

    <img src={quotes} className="quotes" alt="large quotes"/> 

      <div className="op1">
      <p>Fylo has improved our team productivy by <br></br>an order of magnitue. Since making the <br></br> switch our team has become a well-oiled <br></br>collaboration machine</p>
      <h5> <img src={p1} className="p1" alt="south asian man"/>  Satish Patel</h5>
      <h6>Founder & CEO, Huddle</h6>
      </div>

      <div className="op2">
      <p>Fylo has improved our team productivy by <br></br>an order of magnitue. Since making the <br></br> switch our team has become a well-oiled <br></br>collaboration machine</p>
      <h5>      <img src={p2} className="p2" alt="white man"/>  Bruce McKenzie</h5>
      <h6>Founder & CEO, Huddle</h6>
      </div>

      <div className="op3">
      <p>Fylo has improved our team productivy by <br></br>an order of magnitue. Since making the <br></br> switch our team has become a well-oiled <br></br>collaboration machine</p>
      <h5><img src={p3} className="p3" alt="white woman"/>  Iva Boyd</h5>
      <h6>Founder & CEO, Huddle</h6>
      </div>



    </div>
    <div className="form">
      <div>
        <h1>Get early access today</h1>
        <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any <br></br> questions, our support team would be happy to help you. </p>
          <input required placeholder="johnappleseed#.com"></input>
            <button>Get Started For Free</button>

        </div> 

    </div>

    <div className="footer">
     <br></br> 
   
      <h1>hello i am a footer</h1> 
       <div></div> <br></br>
       <img src={logo} className="mainlogo" alt="logo" />	
      <div id="location">
      <img src={location} className="location" alt="white woman"/>  
      </div>
      <div>
        <p>contact number</p> <br></br>
        <p>email</p>
        <div className="webgrid">       
        
         <p>Lorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore et dolore magna aliqua</p>

        <div className="webgridone">
                  <p id="pfooter">About us</p> 
                  <p id="pfooter">Jobs</p> 
                  <p id="pfooter">Press</p> 
                  <p id="pfooter">Blog</p> 
                </div>

                <div className="webgridtwo">
                  <p id="pfooter">Contact us</p> 
                  <p id="pfooter">Terms</p> 
                  <p id="pfooter">Privacy</p> 
                </div>

        </div>
        
      </div>
    </div>
   
       {/* <img src={bg} className="background" alt="dark swirl background"/>   */}

     </div>
  );
  }
}
export default App;
