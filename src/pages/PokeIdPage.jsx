import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './styles/PokeIdPage.css'


const PokeIdPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

  const [pokemon, getSinglePokemon] = useFetch(url)

  useEffect(() => {
    getSinglePokemon()
  }, [id])

  const name = pokemon?.name

  const firstType = pokemon?.types[0].type.name

  console.log(pokemon);


  return (
    <article>
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
      <div className="pokeid__container">

        <div className={`pokeid__rectangular ${firstType}-gradient`}></div>
        <div className="container__img">
          <img className="pokeid__img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </div>
        <div>
          <div className={`container__info ${firstType}-color`}>
            <h2 className="pokeid__id">#{pokemon?.id}</h2>
            <div className="separator">
              <h2 className="pokeid__title">{name}</h2>

            </div>
            <div className="pokeid__property">
              <h4>Peso</h4>
              <span>{pokemon?.weight}</span>
              <h4>Altura</h4>
              <span>{pokemon?.height}</span>
            </div>
            <div>
              <div className="container__hability">
                <h3>Tipo</h3>
                {pokemon?.types[0] && <div className={`pokeid__type ${firstType}-background`}>{pokemon?.types[0].type.name}</div>}
                {pokemon?.types[1] && <div className={`pokeid__type ${pokemon?.types[1].type.name}-background`}>{pokemon?.types[1].type.name}</div>}
                {pokemon?.types[2] && <div className={`pokeid__type ${pokemon?.types[2].type.name}-background`}>{pokemon?.types[2].type.name}</div>}
                {pokemon?.types[3] && <div className={`pokeid__type ${pokemon?.types[3].type.name}-background`}>{pokemon?.types[3].type.name}</div>}
                <h3>Habilidades</h3>
                <div className="pokeid__type__two">{pokemon?.abilities[0].ability.name}</div>
                <div className="pokeid__type__two">{pokemon?.abilities[1].ability.name}</div>
              </div>


              <div className="pokeid__container__stats">
                <div className="pokeid__stats__title">
                  <h2>Stats</h2>
                </div>
                <div className="pokeid__stat">
                  {
                    pokemon?.stats.map(statInfo => {
                      const style = {
                        width: `${statInfo.base_stat / 250 * 100}%`
                      }
                      return (
                        <div>
                          <div className="pokeid__values__container">
                            <h3>{statInfo.stat.name}</h3>
                            <h4 className="pokeid__number">{statInfo.base_stat} / 255</h4>
                          </div>
                          <div key={statInfo.stat.name} className="pokeid__stat__bar">
                            <div style={style} className="pokeid__stat__value"></div>
                          </div>
                        </div>)
                    }
                    )
                  }
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="pokeid__container__movements">
        <h2>Movements</h2>
        <div className="pokeid__movements">
          <div className="pokeid__moves">
            {
              pokemon?.moves.map(movesInfo => {

                return (<div key={movesInfo.move.name} className="">
                  <div className="pokeid__move">
                    <h4>{movesInfo.move.name}</h4>
                  </div>
                </div>)
              }
              )
            }
          </div>
        </div>
      </div>
    </article>
  )
}

export default PokeIdPage