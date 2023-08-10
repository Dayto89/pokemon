import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import './styles/PokedexPage.css'

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')

  const [selectValue, setSelectValue] = useState('allPokemons')

  const trainer = useSelector(reducer => reducer.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'

  const [pokemons, getAllPokemons, getPokemonsByType] = useFetch(url)

  useEffect(() => {
    if (selectValue === 'allPokemons') {
      getAllPokemons()
    } else {
      getPokemonsByType(selectValue)
    }
  }, [selectValue])

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const cbFilter = poke => {
    const filterInput = poke.name.includes(inputValue)


    return filterInput
  }

  return (
    <div>
      <img className="pokedex__img" src="./img/pokedex.png" alt="" />
      <div>
        <div className="pokedex__line"></div>
        <div className="pokedex__circle">
          <div className="pokedex__inner-circle">
            <div className="pokedex__inner-circle-two">
              <div className="pokedex__inner-circle-three"></div>
            </div>
          </div>
        </div>

        <div className="pokedex__line__second"></div>

      </div>
        <p className="pokedex__title"><span className="pokedex__title__welcome">Bienvenido {trainer},</span> aqui podras encontrar tu pokemon favorito</p>
      <div className="pokedex__container">
        <div className="pokedex__form">
          <form  onSubmit={handleSubmit}>
            <input className="pokedex__input" placeholder="Nombre de Pokemon" ref={inputSearch} type="text" />
            <button className="pokedex__button">Search</button>
          </form>
          <SelectType setSelectValue={setSelectValue} />
        </div>
      </div>

      <div className="resident_container">
        {
          pokemons?.results.filter(cbFilter).map(poke => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PokedexPage

