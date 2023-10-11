import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/searchBar'
import WordInfo from './components/WordInfo'

function App() {

  //variabler för API-länken, data och felmeddelande
  const [apiLink, setApiLink] = useState('https://api.dictionaryapi.dev/api/v2/entries/en/');
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  //Hanterar klick på sökknappenn, kontrollerar om användaren har skrivit in ett ord innan sökning
  //och visar felmeddelande ifall ord saknas
  const handleSearchButtonClick = () => {
    if (!apiLink.endsWith('/')) {
      fetchData(apiLink);
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter a word before searching."); 
    }
  }
  
  //hämtar data från api
  const fetchData = async (apiLink) => {
    const response = await fetch(apiLink);
    const data = await response.json();
    
    if (response.ok) {
      setData(data);
      setErrorMessage("");
    } else {
      setErrorMessage("Word not found. Please try a different word.");
    }
  }

  //uppdaterar api-länken när användaren ändrar det sökta ordet
  const handleSearchedWordChange = (searchedWord) => {
    setApiLink(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`)
  }
  

  return (
    <div className='page'>
      <header>
        <h1>Dictionary</h1>
      </header>
      <main>
        <div className='errorMessage'>{errorMessage}</div>
        <SearchBar onSearchedWordChange = {handleSearchedWordChange} onSearchButtonClick={handleSearchButtonClick}/>
        <WordInfo data={data}/>
      </main>
    </div>
  )
}

export default App
