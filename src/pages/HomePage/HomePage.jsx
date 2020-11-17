import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import characterService from '../../utils/characterService'
import NavBar from '../../components/NavBar/NavBar';
import TrackedGame from '../../components/TrackedGame/TrackedGame';
import { CardGroup, Card, CardColumns } from 'react-bootstrap';



const HomePage = (props) => {
    const[characters, setCharacters]= useState([])
    useEffect(()=>{
      characterService.index().then(res =>{
          let characters = [];
          
          res.forEach(thing => {
            characters.push(thing)
          })
          setCharacters(characters)
          
        })
    }, [props.user])
  return (
    <div className="HomePage">
      <div className="container">
      <h1 className="HomePage tracked-title text-center"> Tracked Games </h1>

      <CardColumns>
        {trackedGames.map((game, idx) => (
          
          
          <TrackedGame
          key={idx}
          game={game}
          />
          
          ))}
       
      </CardColumns>
      </div>
      
      <div className="container">
      <h1 className="HomePage tracked-title text-center"> Tracked Teams </h1>
      <CardColumns>
        {trackedTeams.map((team, idx) => (
          
          
          <TrackedTeam
          key={idx}
          team={team}
          />
          
          ))}
       
      </CardColumns>
      </div>
     
      <footer>
    
      </footer>
    </div>
  )

  }

export default HomePage;