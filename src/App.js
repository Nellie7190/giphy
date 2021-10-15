import './App.css';
import {useState} from 'react';
import GiphyDisplay from './components/GiphyDisplay';
import Title from './components/Title';
import Button from './components/Button';

function App() {
  //apiKey
  const apiKey = "Gi0ZY9g6SDuSkIIG7HgWPDnQJSQMLZTl"

  //State to hold Giphy data
  const [giphy, setGiphy] = useState(null);

  //Function to getGiphy
  const getGiphy = async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`
    );
    const data = await response.json();

    setGiphy(data)
  };

  return (
    <div className="App">
      <Title />
      <Button Giphy={getGiphy}/>
      <GiphyDisplay giphy={giphy}/>
    </div>
  );
}

export default App;
