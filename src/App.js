// import logo from './logo.svg';
import './App.css';

// import About from './components/About';
import Navbar from './components/Navbar';//important
import Textform from './components/Textform';
import React,{useState} from 'react'
import Alert from './components/Alert';
// let a="<b>Harry</b>";   by this we can write like this to bold.
// let a="Harry";

function App() {

// For Alert states are created:------------------------------------------->
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({//here it is true because here setting the alert from null.
      msg:message,
      type:type,
    })
    setTimeout(() => {//important
      setAlert(null)
    }, 2000);
  }
// Adding + Auto Dismissing Alert Messages | Complete React Course in Hindi #13




// For Dark Theam States are set:-------------------------------------------->
  const [mode,setMode]=useState('light');
  // function setmode(params) {
  //   setMode("light");
  // }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      // setAlert("Dark Mode is Enabled.","success")//but this is wrong beacuse we not have to set alert fom here we have to call showAlert than it will set the alert [Point #1] [wrong here]
      showAlert(" Dark Mode is Enabled.","success")
      document.title="TextUtile-Dark Mode"
      // setInterval(() => {
      //   document.title="TextUtile is amazing."
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtile"
      // }, 1500);
    }


    // React Router Setup + Usage | Complete React Course in Hindi #16--------
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      // setAlert("Light Mode is Enabled.","success")[Point #1]  [wrong here]
      showAlert(" Light Mode is Enabled.","success")
      document.title="TextUtile-Light Mode"
    }
  }
  return (
    <>
        <Navbar mode={mode} toggleMode={toggleMode}/>
  <div className="container my-3">
    <Alert alert={alert}/>
    <Textform showAlert={showAlert} heading="Enter your text:" mode={mode}/>
    {/* <About/> */}
  
  </div>

</>














  );
}

export default App;
