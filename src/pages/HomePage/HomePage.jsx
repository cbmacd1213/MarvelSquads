import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import characterService from '../../utils/characterService';
import NavBar from '../../components/NavBar/NavBar';





const HomePage = (props) => {
    let { character } = useParams();
    const[characters, setCharacters]= useState([])
    useEffect(()=>{
      characterService.characterDetail().then(res =>{
          let characters = [];
          res.forEach(thing => {
            characters.push(thing)
          })
          setCharacters(characters)
          
        })
    }, [props.user])
  return (
    <div className="HomePage">
      
    </div>
    
  )

  }

export default HomePage;