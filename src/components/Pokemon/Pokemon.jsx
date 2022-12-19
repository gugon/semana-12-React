import React, {useState} from "react";
import "./Pokemon.css"

const Pokemon = props => {

    const [show, setShow ] = useState(false)
    const { selPokemon, requisicaoCompleta, imagemPokemon,
            bntPrev, bntNext } = props;
            
    return(
        <div>
            <button onClick={selPokemon}> Selecionar </button>
            <h3>{requisicaoCompleta.name}</h3>
            <div className='image-stats'>
                <img src={imagemPokemon} alt="Pokemon"/>
                <div className='stats'>
                    
                    {requisicaoCompleta && requisicaoCompleta.stats.map((e) => <p>{`${e.stat.name} = ${e.base_stat}`}</p>)}

                </div>
            </div>                   
            
            <div>        
                <button onClick={bntPrev}> prev </button>
                <button onClick={bntNext}> next </button>
            </div>
        </div>
    )
}

export default Pokemon;