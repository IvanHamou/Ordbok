import { useState } from 'react'
import "./WordInfo.scss"


function WordInfo( {data} ) {

    //variabel som ska innehålla JSX-elementet som ska renderas
    let dataInfo = null

    if (data.length > 0) {

      //om det finns data att visa så loopa igenom den och skapa JSX-element för varje ord
      dataInfo = data.map((word, index) => (
        <ul key={index} className='mainUl'>
          <li>
            <h2>{word.word}</h2>
          </li>
          <hr />
          <ul className='phoneticUl'>
          {word.phonetics.map((phonetic, index) => (
            <li key={index} className='phoneticLi'>
              <h4>{phonetic.text}</h4>
              <audio role='audio' controls key={new Date().getTime()}>
                <source src={phonetic.audio} type="audio/mpeg" />
              </audio>
            </li>
          ))}
          </ul>
          <hr />
          {word.meanings.map((meaning, meaningIndex) => (
            <li key={meaningIndex} className='definition'>
              <h4>{meaning.partOfSpeech}</h4>
              {meaning.definitions.map((definition, definitionIndex) => (
                <p key={definitionIndex}>{definition.definition}</p>
              ))}
              <hr />
            </li>
          ))}
          <li className='synonymsLi'>
            <h4>Synonyms</h4>
            {word.meanings.map((meaning, meaningIndex) => (
              <ul key={meaningIndex}>
                {meaning.synonyms.map((synonym, synonymIndex) => (
                  <li key={synonymIndex}>{synonym}</li>
                ))}
              </ul>
            ))}
          </li>
        </ul>
      ));
      
    }

  return (
    <section className='wordInfoSec'>
      {dataInfo}
    </section>
  )
}

export default WordInfo
