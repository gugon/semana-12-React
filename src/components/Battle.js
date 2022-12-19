import React, { useState, useEffect, useRef } from 'react';

import Pokemon from './Pokemon/Pokemon';


export default function Battle(){
  
  const [full, setFull] = useState('')
  const [form, setForm] = useState({
    stats: '',
    paramStats: ''
  })
  const [page, setPage] = useState(1)
  const [image, setImage] = useState('')
  const [armazena, setArmazena] = useState('')
  const [show, setShow ] = useState(false)
  
  const maxPokemon = 500
  const next = '>'
  const prev = '<'

  useEffect( () => {
    pegaImagem()
  },[page])

  async function pegaImagem(){
    // const response = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${page}.png`)
    const response = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${page}.svg`)
    setImage(response)
  }

  useEffect( () => {
    pesquisaPokemon()
    
  },[page])
  

  async function pesquisaPokemon(){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${page}`)
    const data =  await response.json()
    setFull(data)
  }

  
  function selecionaPokemon(){
    setArmazena(full)
    console.log(armazena) 
  }

  function nextPage(){
    page === maxPokemon ? alert("Essa é a última página!!") : setPage(page + 1)
  }

  function prevPage(){
    page === 1 ? alert("Essa é a primeira página!!") : setPage(page - 1)
  }

  function geraNumeroAleatorio(){
    return Math.floor(Math.random() * maxPokemon)
  }
  
  
  return (
    <div className='battle'> 
     
        <h1>Battle</h1>
        <button onClick={ () => setShow(!show)}> Procure e ecolha seu Pokemon!! </button>

        {show && 
          <Pokemon 
            selPokemon={selecionaPokemon} 
            requisicaoCompleta={full} 
            imagemPokemon={image.url}  
            bntPrev={prevPage} bntNext={nextPage} 
          >
          </Pokemon>
        
        }
      
   
    </div>



    
  );
}
