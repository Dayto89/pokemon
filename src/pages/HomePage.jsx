import { useRef } from "react";
import { useDispatch } from "react-redux"
import { setTrainerG } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";
import './styles/HomePage.css'

const HomePage = () => {

  const inputTrainer = useRef()

  const dispath = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispath(setTrainerG(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <div className="home">
      <img className="home__img" src="./img/pokedex.png" alt="" />
      <h2 className="home__title">Hola Entrenador!</h2>
      <p className="home__p">Para poder comenzar, dame tu nombre 😃</p>
      <form className="home__form" onSubmit={handleSubmit}>
        <input className="home__input" id="inputTrainer" placeholder="Tu nombre..." ref={inputTrainer} type="text" />
        <button className="home__button">Atrapalos a todos</button>
      </form>
      <div className="line-container">
        <div className="line"></div>
        <div className="circle">
          <div className="inner-circle">
            <div className="inner-circle-two">
              <div className="inner-circle-three"></div>
            </div>
          </div>
        </div>

        <div className="line_second"></div>

      </div>

    </div>
  )
}

export default HomePage