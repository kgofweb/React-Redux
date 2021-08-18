import tvImg from '../../../img/tv.png'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { buyTV } from '../../redux/tv/actionTV' 

const TvContainer = () => {
  const tvNum = useSelector(state => state.tv.tvs)
  const dispatch = useDispatch()

  return (
    <div className="container">
      <img src={tvImg} alt="phone" />
      <p className="description">
        Available:
        <span id="count" className="count"> { tvNum } </span>
      </p>
      <div className="btn-container">
        <button 
          className="buy-button"
          onClick={() => dispatch(buyTV())}
        >
          Buy Phone
        </button>
        <input type="text" value="" />
      </div>
    </div>
  )
}

export default TvContainer