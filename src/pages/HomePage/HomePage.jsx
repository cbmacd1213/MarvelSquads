import React, { useState, useEffect } from 'react';
import characterService from '../../utils/characterService';





const HomePage = (props) => {
    const[characters, setCharacters]= useState([])
    useEffect(()=>{
      characterService.characterDetail().then(res =>{
          let person = [];
          res.forEach(thing => {
            person.push(thing)
          })
          setCharacters(person)
          
        })
    }, [props.user])
  return (
    <div className="HomePage">
      <h1>
          {characters.name}
      </h1>
    </div>
    
  )

  }

export default HomePage;