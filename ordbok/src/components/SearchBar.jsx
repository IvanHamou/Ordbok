import { useState } from 'react'
import "./SearchBar.scss"


function SearchBar( props ) {

  //state för att hantera det sökta ordet
  const [searchedWord, setSearchedWord] = useState("")

  //Uppdaterar "searchedWord" när användaren skriver i sökfältet
  function sendWord(e) {
        setSearchedWord(e.target.value)
        props.onSearchedWordChange(e.target.value)
  }

  return (
    <section className='searchBarSec'>
            <input type="textbox" placeholder='Search Word...' value={ searchedWord } onChange={sendWord}/>
            <button type="button" onClick={props.onSearchButtonClick}>Look up</button>
    </section>
  )
}

export default SearchBar
