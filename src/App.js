import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('dark');
  const [spin, setspin] = useState('Enable dark mode');

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const togglefunction = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#091245';
      document.body.style.color = 'white';
      setspin('Enable dark mode');
      showalert('Enale dark mode', 'success');

    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setspin('Enable Light mode');
      showalert('Enable Light mode', 'success');
    }

  }
  return (
    <>
     
      <Router>
      <Navbar title="React App" mode={mode} spin={spin} togglefunction={togglefunction} />
      <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About Alert showalert={showalert} />} />
            <Route path="/" element={<Textbox mode={mode} showalert={showalert} heading="Enter the content Here....." />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
