import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AdvicePageComponent from './Components/AdvicePageComponent';
import { useState, useEffect } from 'react';
import FetchApi from './DataServices/DataServices';
import Advice from './Interfaces/interfaces';
import dice from './images/icon-dice.svg'




function App() {
  const [quote, setQuote] = useState<Advice>();
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    const quoteData = async () => {
      const fetchedData = await FetchApi();
      setQuote(fetchedData);
    }
    quoteData()
  }, [trigger])

  const callTrigger = () => {
    setTrigger(!trigger)
  }



  return (
    <>

      <div className='background d-flex align-items-center justify-content-center flex-column' >
        {quote && < AdvicePageComponent advice={quote.slip.advice} id={quote.slip.id} />}

        <div onClick={callTrigger} className='dice'>
          <img src={dice} alt="dice" />
        </div>
      </div>
    </>
  );
}

export default App;
