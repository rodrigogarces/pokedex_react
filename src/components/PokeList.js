import React from 'react';
import PokeCell from './PokeCell';
import { pokeClasses } from '../PokeClasses';
import './styles/PokeList.css';
const PokeList = ({handleOnClick}) => {
    const cells = pokeClasses.map(pokeClass => {
        return (
            <PokeCell 
                key = {pokeClass.id}
                pokeClass={pokeClass}
                handleOnClick = {handleOnClick} //recebe o id clicado
            />
        );
    });
    return (
        <section className="poke-list">
            {cells}
        </section>
    )
}
export default PokeList;